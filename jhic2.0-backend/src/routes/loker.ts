import { Router } from "express";
import { authenticate, requirePermission } from "../middleware/auth.js";
import { PERMISSIONS } from "../constants/permissions.js";
import { lokerService } from "../services/hubinServices.js";

export const lokerRouter = Router();

// Public: published job vacancies, optionally filtered by program
lokerRouter.get("/", async (req, res) => {
  const { programId } = req.query;
  const items = await lokerService.list(false, typeof programId === "string" ? programId : undefined);
  res.json(items);
});

// Admin Hubin: CRUD
lokerRouter.get(
  "/all",
  authenticate,
  requirePermission(PERMISSIONS.LOKER_MANAGE),
  async (_req, res) => {
    const items = await lokerService.list(true);
    res.json(items);
  }
);

lokerRouter.post(
  "/",
  authenticate,
  requirePermission(PERMISSIONS.LOKER_MANAGE),
  async (req, res) => {
    const { title, company, description } = req.body ?? {};
    if (!title || !company || !description) {
      return res.status(400).json({ error: "title, company, and description are required" });
    }
    const item = await lokerService.create(req.body ?? {});
    res.status(201).json(item);
  }
);

lokerRouter.put(
  "/:id",
  authenticate,
  requirePermission(PERMISSIONS.LOKER_MANAGE),
  async (req, res) => {
    const id = String(req.params.id);
    const existing = await lokerService.getById(id);
    if (!existing) return res.status(404).json({ error: "Job vacancy not found" });
    const item = await lokerService.update(id, req.body ?? {});
    res.json(item);
  }
);

lokerRouter.delete(
  "/:id",
  authenticate,
  requirePermission(PERMISSIONS.LOKER_MANAGE),
  async (req, res) => {
    const id = String(req.params.id);
    const existing = await lokerService.getById(id);
    if (!existing) return res.status(404).json({ error: "Job vacancy not found" });
    await lokerService.remove(id);
    res.status(204).send();
  }
);
