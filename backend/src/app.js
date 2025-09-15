import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import "./utils/loadEnv.js";
import { connectMongo } from "./utils/ConnectDb.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

// Health route
app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "myward-backend" });
});

// Placeholder for api routes
// app.use('/api', apiRouter)

// Global error handler (basic)
app.use((err, _req, res, _next) => {
  console.error("[error]", err);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server error" });
});

// Initialize database connection on import
connectMongo().catch((e) => {
  console.error("Failed to connect to MongoDB:", e);
  process.exit(1);
});

export default app;
