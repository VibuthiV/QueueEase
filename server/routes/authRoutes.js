// routes/authRoutes.js
import express from "express";
import { signupController, loginController, meController } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.get("/me", authMiddleware, meController);

export default router;
