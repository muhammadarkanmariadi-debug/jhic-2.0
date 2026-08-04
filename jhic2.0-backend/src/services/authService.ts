import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";

const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret-change-me";
const TOKEN_TTL = "7d";

export interface AuthUserPayload {
  id: string;
  email: string;
  roleId: string;
  roleName: string;
  division?: string | null;
  permissions: string[];
}

function signToken(user: AuthUserPayload): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: TOKEN_TTL });
}

async function loadUserWithRole(userId: string) {
  return prisma.user.findUnique({
    where: { id: userId },
    include: {
      role: {
        include: { permissions: { include: { permission: true } } },
      },
    },
  });
}

export const authService = {
  /** Register a new user. Role must exist (see `prisma/seed.ts`). */
  async register({
    email,
    password,
    fullName,
    roleName = "Admin Kurikulum",
  }: {
    email: string;
    password: string;
    fullName: string;
    roleName?: string;
  }) {
    const role = await prisma.role.findUnique({ where: { name: roleName } });
    if (!role) throw new Error(`Role '${roleName}' not found — run 'prisma db seed' first`);

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) throw new Error("Email already registered");

    const passwordHash = await bcrypt.hash(password, 10);
    return prisma.user.create({
      data: { email, passwordHash, fullName, roleId: role.id },
      select: { id: true, email: true, fullName: true },
    });
  },

  async login({ email, password }: { email: string; password: string }) {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { role: { include: { permissions: { include: { permission: true } } } } },
    });
    if (!user || !user.isActive) throw new Error("Invalid credentials");

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) throw new Error("Invalid credentials");

    const payload: AuthUserPayload = {
      id: user.id,
      email: user.email,
      roleId: user.role.id,
      roleName: user.role.name,
      division: user.role.division,
      permissions: user.role.permissions.map((p) => p.permission.key),
    };

    await prisma.user.update({ where: { id: user.id }, data: { lastLoginAt: new Date() } });
    return { token: signToken(payload), user: payload };
  },

  async me(userId: string) {
    const user = await loadUserWithRole(userId);
    if (!user) return null;
    return {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      roleName: user.role.name,
      division: user.role.division,
      permissions: user.role.permissions.map((p) => p.permission.key),
    };
  },
};
