import { Router } from "express";
import { authService } from "../services/authService.js";
import { authenticate } from "../middleware/auth.js";

export const authRouter = Router();

// Register a new user (dev-friendly; gate to Super Admin in production).
authRouter.post("/register", async (req, res) => {
  const { email, password, fullName, roleName } = req.body ?? {};
  if (!email || !password || !fullName) {
    return res.status(400).json({ error: "email, password, and fullName are required" });
  }
  try {
    const user = await authService.register({ email, password, fullName, roleName });
    res.status(201).json({ message: "registered", user });
  } catch (e) {
    const msg = (e as Error).message;
    if (msg.includes("already registered")) return res.status(409).json({ error: msg });
    if (msg.includes("not found")) return res.status(400).json({ error: msg });
    throw e;
  }
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body ?? {};
  if (!email || !password) {
    return res.status(400).json({ error: "email and password are required" });
  }
  try {
    const result = await authService.login({ email, password });
    res.json(result);
  } catch (e) {
    const msg = (e as Error).message;
    if (msg === "Invalid credentials") return res.status(401).json({ error: msg });
    throw e;
  }
});

// Stateless JWT — logout is a client-side token discard.
authRouter.post("/logout", (_req, res) => {
  res.json({ message: "logged out" });
});

authRouter.get("/me", authenticate, async (req, res) => {
  const user = await authService.me(req.user!.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json({ user });
});
