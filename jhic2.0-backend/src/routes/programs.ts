import { Router } from "express";
import { programService } from "../services/programService.js";

export const programsRouter = Router();

// Public: active programs with career portal links (JHI-06 / MokletKarir)
programsRouter.get("/", async (_req, res) => {
  const items = await programService.listPublic();
  res.json(items);
});
