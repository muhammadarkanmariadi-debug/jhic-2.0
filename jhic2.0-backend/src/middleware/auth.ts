import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { PermissionKey } from "../constants/permissions.js";

/**
 * JHI-v2-10 — Division-based RBAC.
 *
 * `authenticate` verifies the stateless JWT issued at login (JHI-02). The token
 * must carry these claims: { sub/id, email, roleId, roleName, division, permissions }.
 * `requirePermission` / `requireDivision` then gate a route. Super Admin
 * (division "SUPER_ADMIN") bypasses both guards.
 */

export interface AuthUser {
  id: string;
  email: string;
  roleId: string;
  roleName: string;
  division?: string | null;
  permissions: string[];
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret-change-me";

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: missing bearer token" });
  }
  const token = header.slice("Bearer ".length);
  try {
    const payload = jwt.verify(token, JWT_SECRET) as unknown as AuthUser;
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({ error: "Unauthorized: invalid or expired token" });
  }
}

export function requirePermission(permission: PermissionKey) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;
    if (!user) return res.status(401).json({ error: "Unauthorized" });
    if (user.division === "SUPER_ADMIN") return next();
    if (!user.permissions?.includes(permission)) {
      return res.status(403).json({ error: `Forbidden: missing permission '${permission}'` });
    }
    next();
  };
}

export function requireDivision(division: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;
    if (!user) return res.status(401).json({ error: "Unauthorized" });
    if (user.division === "SUPER_ADMIN") return next();
    if (user.division !== division) {
      return res.status(403).json({ error: `Forbidden: requires ${division} division access` });
    }
    next();
  };
}
