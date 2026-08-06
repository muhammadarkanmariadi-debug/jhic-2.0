import { Router } from "express";
import { authenticate, requirePermission } from "../middleware/auth.js";
import { PERMISSIONS } from "../constants/permissions.js";
import { lombaService } from "../services/hubinServices.js";

export const lombaRouter = Router();

// Public: published competitions (Info Lomba)
lombaRouter.get("/", async (_req, res) => {
  const items = await lombaService.list(false);
  res.json(items);
});

// Admin Humas (Informasi / Lomba): CRUD
lombaRouter.get(
  "/all",
  authenticate,
  requirePermission(PERMISSIONS.LOMBA_MANAGE),
  async (_req, res) => {
    const items = await lombaService.list(true);
    res.json(items);
  }
);

lombaRouter.post(
  "/",
  authenticate,
  requirePermission(PERMISSIONS.LOMBA_MANAGE),
  async (req, res) => {
    const { title, description } = req.body ?? {};
    if (!title || !description) {
      return res.status(400).json({ error: "title and description are required" });
    }
    const item = await lombaService.create(req.body ?? {});
    res.status(201).json(item);
  }
);

lombaRouter.put(
  "/:id",
  authenticate,
  requirePermission(PERMISSIONS.LOMBA_MANAGE),
  async (req, res) => {
    const id = String(req.params.id);
    const existing = await lombaService.getById(id);
    if (!existing) return res.status(404).json({ error: "Competition not found" });
    const item = await lombaService.update(id, req.body ?? {});
    res.json(item);
  }
);

lombaRouter.delete(
  "/:id",
  authenticate,
  requirePermission(PERMISSIONS.LOMBA_MANAGE),
  async (req, res) => {
    const id = String(req.params.id);
    const existing = await lombaService.getById(id);
    if (!existing) return res.status(404).json({ error: "Competition not found" });
    await lombaService.remove(id);
    res.status(204).send();
  }
);
