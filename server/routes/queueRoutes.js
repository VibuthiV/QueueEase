// routes/queueRoutes.js
import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { joinQueue, getQueueForService, callNextToken } from "../controllers/queueController.js";

const router = express.Router();

// join queue (public) -> expects { serviceId, userId? } (userId optional if anonymous)
router.post("/join", joinQueue);

// get queue for a service
router.get("/service/:serviceId", getQueueForService);

// admin: call next token (protected in real app; here left public for simplicity)
router.post("/service/:serviceId/next", callNextToken);

export default router;
