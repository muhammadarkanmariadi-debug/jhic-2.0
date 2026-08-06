import { Router } from "express";
import { authenticate, requireDivision } from "../middleware/auth.js";
import { featuredProgramService } from "../services/featuredProgramService.js";

export const featuredProgramsRouter = Router();

// Public: only active featured programs (visitor-facing)
featuredProgramsRouter.get("/", async (_req, res) => {
  const items = await featuredProgramService.list(false);
  res.json(items);
});

// Admin Kurikulum only: full management CRUD (JHI-v2-05)
featuredProgramsRouter.get(
  "/all",
  authenticate,
  requireDivision("KURIKULUM"),
  async (_req, res) => {
    const items = await featuredProgramService.list(true);
    res.json(items);
  }
);

featuredProgramsRouter.post(
  "/",
  authenticate,
  requireDivision("KURIKULUM"),
  async (req, res) => {
    const { name, slug, description, programId, isActive, ctaLabel, sortOrder } = req.body ?? {};
    if (!name || !slug || !description) {
      return res.status(400).json({ error: "name, slug, and description are required" });
    }
    const item = await featuredProgramService.create({
      name,
      slug,
      description,
      programId: programId ?? null,
      isActive: isActive ?? true,
      ctaLabel: ctaLabel ?? null,
      sortOrder: sortOrder ?? 0,
    });
    res.status(201).json(item);
  }
);

featuredProgramsRouter.put(
  "/:id",
  authenticate,
  requireDivision("KURIKULUM"),
  async (req, res) => {
    const id = String(req.params.id);
    const { name, slug, description, programId, isActive, ctaLabel, sortOrder } = req.body ?? {};
    const existing = await featuredProgramService.getById(id);
    if (!existing) return res.status(404).json({ error: "FeaturedProgram not found" });
    const item = await featuredProgramService.update(id, {
      name: name ?? existing.name,
      slug: slug ?? existing.slug,
      description: description ?? existing.description,
      programId: programId ?? existing.programId,
      isActive: isActive ?? existing.isActive,
      ctaLabel: ctaLabel ?? existing.ctaLabel,
      sortOrder: sortOrder ?? existing.sortOrder,
    });
    res.json(item);
  }
);

featuredProgramsRouter.delete(
  "/:id",
  authenticate,
  requireDivision("KURIKULUM"),
  async (req, res) => {
    const id = String(req.params.id);
    const existing = await featuredProgramService.getById(id);
    if (!existing) return res.status(404).json({ error: "FeaturedProgram not found" });
    await featuredProgramService.remove(id);
    res.status(204).send();
  }
);
