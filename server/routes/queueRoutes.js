// routes/queueRoutes.js
import express from "express";
import { joinQueue, getQueueForService, callNextToken } from "../controllers/queueController.js";

const router = express.Router();

router.post("/join", joinQueue);
router.get("/service/:serviceId", getQueueForService);
router.post("/service/:serviceId/next", callNextToken);

export default router;
