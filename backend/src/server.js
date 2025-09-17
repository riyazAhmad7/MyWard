import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import "./utils/loadEnv.js";
import { connectMongo } from "./utils/ConnectDb.js";

const app = express();

// Core middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

// Health route
app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "myward-backend" });
});

// Placeholder for API routes
// app.use('/api', apiRouter)

// Global error handler
app.use((err, _req, res, _next) => {
  console.error("[error]", err);
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server error" });
});

// Boot server after DB connects
const port = process.env.PORT || 4000;
connectMongo()
  .then(() => {
    app.listen(port, () => {
      console.log(`[server] listening on http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.error("Failed to connect to MongoDB:", e);
    process.exit(1);
  });

export default app;
