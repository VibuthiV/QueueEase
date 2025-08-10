// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes.js";
import queueRoutes from "./routes/queueRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI, { })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("Mongo connect error:", err);
    process.exit(1);
  });

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/queue", queueRoutes);

// simple test route
app.get("/", (req, res) => res.send("QueueEase API Running"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
