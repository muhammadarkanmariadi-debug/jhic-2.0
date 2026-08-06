import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { featuredProgramsRouter } from "./routes/featuredPrograms.js";
import { programUmumRouter } from "./routes/programUmum.js";
import { schoolScheduleRouter } from "./routes/schoolSchedule.js";
import { authRouter } from "./routes/auth.js";
import { programsRouter } from "./routes/programs.js";
import { curriculumVersionsRouter } from "./routes/curriculumVersions.js";
import { partnersRouter } from "./routes/partners.js";
import { lokerRouter } from "./routes/loker.js";
import { beasiswaRouter } from "./routes/beasiswa.js";
import { lombaRouter } from "./routes/lomba.js";
import { botRouter } from "./routes/bot.js";
import { feedbackRouter } from "./routes/feedback.js";
import { prisma } from "./lib/prisma.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Health check (verifies DB connectivity via prisma)
app.get("/api/health", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: "OK", message: "JHIC 2.0 Backend is running", db: "connected" });
  } catch {
    res.status(503).json({ status: "DEGRADED", message: "JHIC 2.0 Backend is running", db: "unavailable" });
  }
});

// Routes
app.use("/api/auth", authRouter);
app.use("/api/featured-programs", featuredProgramsRouter);
app.use("/api/program-umum", programUmumRouter);
app.use("/api/schedule", schoolScheduleRouter);
app.use("/api/programs", programsRouter);
app.use("/api/curriculum-versions", curriculumVersionsRouter);
app.use("/api/partners", partnersRouter);
app.use("/api/loker", lokerRouter);
app.use("/api/beasiswa", beasiswaRouter);
app.use("/api/lomba", lombaRouter);
app.use("/api/bot", botRouter);
app.use("/api/feedback", feedbackRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
