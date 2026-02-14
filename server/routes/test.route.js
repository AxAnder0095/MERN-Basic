import express from "express";
import { getTests, addTest } from "../controllers/test.controller.js";
import { checkJwt } from "../middleware/auth.middleware.js";

const router = express.Router();

// Protected routes
router.use(checkJwt);

router.get("/", getTests);
router.post("/", addTest);

export default router;
