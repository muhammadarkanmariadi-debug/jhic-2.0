import { Router } from "express";
import { botService } from "../services/botService.js";

export const botRouter = Router();

// Public: active intents (used for quick-reply suggestion chips)
botRouter.get("/intents", async (_req, res) => {
  const items = await botService.intents();
  res.json(items);
});

// Public: respond to a chat message
botRouter.post("/chat", async (req, res) => {
  const { message, sessionId } = req.body ?? {};
  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "message is required" });
  }
  const result = await botService.chat({
    message: message.trim(),
    sessionId: typeof sessionId === "string" && sessionId ? sessionId : undefined,
  });
  res.json(result);
});