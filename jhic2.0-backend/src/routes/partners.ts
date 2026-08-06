import { Router } from "express";
import { authenticate, requirePermission } from "../middleware/auth.js";
import { PERMISSIONS } from "../constants/permissions.js";
import { partnersService } from "../services/hubinServices.js";

export const partnersRouter = Router();

// Public: industry partner directory
partnersRouter.get("/", async (_req, res) => {
  const items = await partnersService.list();
  res.json(items);
});

// Admin Hubin: CRUD
partnersRouter.post(
  "/",
  authenticate,
  requirePermission(PERMISSIONS.PARTNER_MANAGE),
  async (req, res) => {
    const { name, logo, url, isFeatured } = req.body ?? {};
    if (!name || !logo) return res.status(400).json({ error: "name and logo are required" });
    const item = await partnersService.create({ name, logo, url: url ?? null, isFeatured });
    res.status(201).json(item);
  }
);

partnersRouter.put(
  "/:id",
  authenticate,
  requirePermission(PERMISSIONS.PARTNER_MANAGE),
  async (req, res) => {
    const id = String(req.params.id);
    const existing = await partnersService.getById(id);
    if (!existing) return res.status(404).json({ error: "Partner not found" });
    const { name, logo, url, isFeatured } = req.body ?? {};
    const item = await partnersService.update(id, {
      name: name ?? existing.name,
      logo: logo ?? existing.logo,
      url: url !== undefined ? url : existing.url,
      isFeatured: isFeatured !== undefined ? isFeatured : existing.isFeatured,
    });
    res.json(item);
  }
);

partnersRouter.delete(
  "/:id",
  authenticate,
  requirePermission(PERMISSIONS.PARTNER_MANAGE),
  async (req, res) => {
    const id = String(req.params.id);
    const existing = await partnersService.getById(id);
    if (!existing) return res.status(404).json({ error: "Partner not found" });
    await partnersService.remove(id);
    res.status(204).send();
  }
);
