import { Router } from "express";
import { authenticate, requirePermission } from "../middleware/auth.js";
import { PERMISSIONS } from "../constants/permissions.js";
import { programUmumService } from "../services/programUmumService.js";

export const programUmumRouter = Router();

// Public: active Program Umum tabs (visitor-facing)
programUmumRouter.get("/", async (_req, res) => {
  const items = await programUmumService.list(false);
  res.json(items);
});

// Admin Kurikulum only: full CRUD of Program Umum content
programUmumRouter.get(
  "/all",
  authenticate,
  requirePermission(PERMISSIONS.CURRICULUM_MANAGE),
  async (_req, res) => {
    const items = await programUmumService.list(true);
    res.json(items);
  }
);

programUmumRouter.get(
  "/:id",
  authenticate,
  requirePermission(PERMISSIONS.CURRICULUM_MANAGE),
  async (req, res) => {
    const id = String(req.params.id);
    const item = await programUmumService.getById(id);
    if (!item) return res.status(404).json({ error: "Program Umum tab not found" });
    res.json(item);
  }
);

programUmumRouter.post(
  "/",
  authenticate,
  requirePermission(PERMISSIONS.CURRICULUM_MANAGE),
  async (req, res) => {
    const { key, label, intro, icon, sections, isActive, sortOrder } = req.body ?? {};
    if (!key || !label || !Array.isArray(sections)) {
      return res
        .status(400)
        .json({ error: "key, label, and sections (array) are required" });
    }
    const existing = await programUmumService.getByKey(key);
    if (existing) {
      return res.status(409).json({ error: `Program Umum tab with key '${key}' already exists` });
    }
    const item = await programUmumService.create({
      key,
      label,
      intro: intro ?? null,
      icon: icon ?? null,
      sections,
      isActive: isActive ?? true,
      sortOrder: sortOrder ?? 0,
      updatedBy: req.user?.id ?? null,
    });
    res.status(201).json(item);
  }
);

programUmumRouter.put(
  "/:id",
  authenticate,
  requirePermission(PERMISSIONS.CURRICULUM_MANAGE),
  async (req, res) => {
    const id = String(req.params.id);
    const existing = await programUmumService.getById(id);
    if (!existing) return res.status(404).json({ error: "Program Umum tab not found" });

    const { key, label, intro, icon, sections, isActive, sortOrder } = req.body ?? {};
    const item = await programUmumService.update(id, {
      key: key ?? existing.key,
      label: label ?? existing.label,
      intro: intro !== undefined ? intro : existing.intro,
      icon: icon !== undefined ? icon : existing.icon,
      sections: sections !== undefined ? sections : existing.sections,
      isActive: isActive !== undefined ? isActive : existing.isActive,
      sortOrder: sortOrder !== undefined ? sortOrder : existing.sortOrder,
      updatedBy: req.user?.id ?? null,
    });
    res.json(item);
  }
);

programUmumRouter.delete(
  "/:id",
  authenticate,
  requirePermission(PERMISSIONS.CURRICULUM_MANAGE),
  async (req, res) => {
    const id = String(req.params.id);
    const existing = await programUmumService.getById(id);
    if (!existing) return res.status(404).json({ error: "Program Umum tab not found" });
    await programUmumService.remove(id);
    res.status(204).send();
  }
);
