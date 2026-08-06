import { Router } from "express";
import { authenticate, requirePermission } from "../middleware/auth.js";
import { PERMISSIONS } from "../constants/permissions.js";
import { schoolScheduleService } from "../services/schoolScheduleService.js";

export const schoolScheduleRouter = Router();

// Public: active schedules (visitor-facing)
schoolScheduleRouter.get("/", async (_req, res) => {
  const items = await schoolScheduleService.list(false);
  res.json(items);
});

// Admin Konten only: full CRUD of Jadwal Sekolah
schoolScheduleRouter.get(
  "/all",
  authenticate,
  requirePermission(PERMISSIONS.SCHEDULE_MANAGE),
  async (_req, res) => {
    const items = await schoolScheduleService.list(true);
    res.json(items);
  }
);

schoolScheduleRouter.get(
  "/:id",
  authenticate,
  requirePermission(PERMISSIONS.SCHEDULE_MANAGE),
  async (req, res) => {
    const id = String(req.params.id);
    const item = await schoolScheduleService.getById(id);
    if (!item) return res.status(404).json({ error: "SchoolSchedule not found" });
    res.json(item);
  }
);

schoolScheduleRouter.post(
  "/",
  authenticate,
  requirePermission(PERMISSIONS.SCHEDULE_MANAGE),
  async (req, res) => {
    const { title, description, days, isActive, sortOrder } = req.body ?? {};
    if (!title || !Array.isArray(days)) {
      return res.status(400).json({ error: "title and days (array) are required" });
    }
    const item = await schoolScheduleService.create({
      title,
      description: description ?? null,
      days,
      isActive: isActive ?? true,
      sortOrder: sortOrder ?? 0,
      updatedBy: req.user?.id ?? null,
    });
    res.status(201).json(item);
  }
);

schoolScheduleRouter.put(
  "/:id",
  authenticate,
  requirePermission(PERMISSIONS.SCHEDULE_MANAGE),
  async (req, res) => {
    const id = String(req.params.id);
    const existing = await schoolScheduleService.getById(id);
    if (!existing) return res.status(404).json({ error: "SchoolSchedule not found" });

    const { title, description, days, isActive, sortOrder } = req.body ?? {};
    const item = await schoolScheduleService.update(id, {
      title: title ?? existing.title,
      description: description !== undefined ? description : existing.description,
      days: days !== undefined ? days : existing.days,
      isActive: isActive !== undefined ? isActive : existing.isActive,
      sortOrder: sortOrder !== undefined ? sortOrder : existing.sortOrder,
      updatedBy: req.user?.id ?? null,
    });
    res.json(item);
  }
);

schoolScheduleRouter.delete(
  "/:id",
  authenticate,
  requirePermission(PERMISSIONS.SCHEDULE_MANAGE),
  async (req, res) => {
    const id = String(req.params.id);
    const existing = await schoolScheduleService.getById(id);
    if (!existing) return res.status(404).json({ error: "SchoolSchedule not found" });
    await schoolScheduleService.remove(id);
    res.status(204).send();
  }
);