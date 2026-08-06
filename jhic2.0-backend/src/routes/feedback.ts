import { Router } from "express";
import { authenticate, requirePermission } from "../middleware/auth.js";
import { PERMISSIONS } from "../constants/permissions.js";
import { feedbackService } from "../services/feedbackService.js";

export const feedbackRouter = Router();

// Public: submit feedback (MokletUlasan)
feedbackRouter.post("/", async (req, res) => {
  const { context, contextRefId, rating, comment, contact } = req.body ?? {};
  if (!comment && rating == null) {
    return res.status(400).json({ error: "comment or rating is required" });
  }
  const item = await feedbackService.create({
    context: typeof context === "string" ? context : null,
    contextRefId: typeof contextRefId === "string" ? contextRefId : null,
    rating: typeof rating === "number" ? rating : null,
    comment: typeof comment === "string" ? comment : null,
    contact: typeof contact === "string" ? contact : null,
  });
  res.status(201).json(item);
});

// Admin Support: review feedback
feedbackRouter.get(
  "/all",
  authenticate,
  requirePermission(PERMISSIONS.SUPPORT_REPLY),
  async (_req, res) => {
    const items = await feedbackService.list();
    res.json(items);
  }
);

feedbackRouter.patch(
  "/:id/status",
  authenticate,
  requirePermission(PERMISSIONS.SUPPORT_REPLY),
  async (req, res) => {
    const id = String(req.params.id);
    const { status } = req.body ?? {};
    if (!status) return res.status(400).json({ error: "status is required" });
    const item = await feedbackService.updateStatus(id, String(status));
    res.json(item);
  }
);