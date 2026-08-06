import { Router } from "express";
import { authenticate, requirePermission } from "../middleware/auth.js";
import { PERMISSIONS } from "../constants/permissions.js";
import { beasiswaService } from "../services/hubinServices.js";

export const beasiswaRouter = Router();

// Public: published scholarships, optionally filtered by program
beasiswaRouter.get("/", async (req, res) => {
  const { programId } = req.query;
  const items = await beasiswaService.list(false, typeof programId === "string" ? programId : undefined);
  res.json(items);
});

// Admin Hubin: CRUD
beasiswaRouter.get(
  "/all",
  authenticate,
  requirePermission(PERMISSIONS.BEASISWA_MANAGE),
  async (_req, res) => {
    const items = await beasiswaService.list(true);
    res.json(items);
  }
);

beasiswaRouter.post(
  "/",
  authenticate,
  requirePermission(PERMISSIONS.BEASISWA_MANAGE),
  async (req, res) => {
    const { title, description, provider } = req.body ?? {};
    if (!title || !description || !provider) {
      return res.status(400).json({ error: "title, description, and provider are required" });
    }
    const item = await beasiswaService.create(req.body ?? {});
    res.status(201).json(item);
  }
);

beasiswaRouter.put(
  "/:id",
  authenticate,
  requirePermission(PERMISSIONS.BEASISWA_MANAGE),
  async (req, res) => {
    const id = String(req.params.id);
    const existing = await beasiswaService.getById(id);
    if (!existing) return res.status(404).json({ error: "Scholarship not found" });
    const item = await beasiswaService.update(id, req.body ?? {});
    res.json(item);
  }
);

beasiswaRouter.delete(
  "/:id",
  authenticate,
  requirePermission(PERMISSIONS.BEASISWA_MANAGE),
  async (req, res) => {
    const id = String(req.params.id);
    const existing = await beasiswaService.getById(id);
    if (!existing) return res.status(404).json({ error: "Scholarship not found" });
    await beasiswaService.remove(id);
    res.status(204).send();
  }
);
