import { Router } from "express";
import { authenticate, requirePermission } from "../middleware/auth.js";
import { PERMISSIONS } from "../constants/permissions.js";
import { curriculumVersionService } from "../services/curriculumVersionService.js";

export const curriculumVersionsRouter = Router();

// Public: active versions, optionally filtered by program/academic year
curriculumVersionsRouter.get("/", async (req, res) => {
  const { programId, academicYear } = req.query;
  const items = await curriculumVersionService.list({
    includeInactive: false,
    programId: typeof programId === "string" ? programId : undefined,
    academicYear: typeof academicYear === "string" ? academicYear : undefined,
  });
  res.json(items);
});

// Admin Kurikulum: full CRUD
curriculumVersionsRouter.get(
  "/all",
  authenticate,
  requirePermission(PERMISSIONS.CURRICULUM_MANAGE),
  async (req, res) => {
    const { programId, academicYear } = req.query;
    const items = await curriculumVersionService.list({
      includeInactive: true,
      programId: typeof programId === "string" ? programId : undefined,
      academicYear: typeof academicYear === "string" ? academicYear : undefined,
    });
    res.json(items);
  }
);

curriculumVersionsRouter.post(
  "/",
  authenticate,
  requirePermission(PERMISSIONS.CURRICULUM_MANAGE),
  async (req, res) => {
    const { programId, label, academicYear, version, isActive, subjectStructure, competencyDetails, publishedAt } =
      req.body ?? {};
    if (!programId || !label || !academicYear || !subjectStructure) {
      return res
        .status(400)
        .json({ error: "programId, label, academicYear, and subjectStructure are required" });
    }
    const item = await curriculumVersionService.create({
      programId,
      label,
      academicYear,
      version,
      isActive,
      subjectStructure,
      competencyDetails,
      publishedAt: publishedAt ? new Date(publishedAt) : null,
      lastUpdatedBy: req.user?.id ?? null,
    });
    res.status(201).json(item);
  }
);

curriculumVersionsRouter.put(
  "/:id",
  authenticate,
  requirePermission(PERMISSIONS.CURRICULUM_MANAGE),
  async (req, res) => {
    const id = String(req.params.id);
    const existing = await curriculumVersionService.getById(id);
    if (!existing) return res.status(404).json({ error: "Curriculum version not found" });

    const { programId, label, academicYear, version, isActive, subjectStructure, competencyDetails, publishedAt } =
      req.body ?? {};
    const item = await curriculumVersionService.update(id, {
      programId: programId ?? existing.programId,
      label: label ?? existing.label,
      academicYear: academicYear ?? existing.academicYear,
      version: version ?? existing.version,
      isActive: isActive !== undefined ? isActive : existing.isActive,
      subjectStructure: subjectStructure !== undefined ? subjectStructure : existing.subjectStructure,
      competencyDetails: competencyDetails !== undefined ? competencyDetails : existing.competencyDetails,
      publishedAt: publishedAt !== undefined ? (publishedAt ? new Date(publishedAt) : null) : existing.publishedAt,
      lastUpdatedBy: req.user?.id ?? null,
    });
    res.json(item);
  }
);

curriculumVersionsRouter.delete(
  "/:id",
  authenticate,
  requirePermission(PERMISSIONS.CURRICULUM_MANAGE),
  async (req, res) => {
    const id = String(req.params.id);
    const existing = await curriculumVersionService.getById(id);
    if (!existing) return res.status(404).json({ error: "Curriculum version not found" });
    await curriculumVersionService.remove(id);
    res.status(204).send();
  }
);
