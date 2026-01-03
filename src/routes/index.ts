import { Router } from "express";
import { healthStatus } from "../controllers/api.controller";

const router = Router();

router.get("/health", healthStatus);

export default router;
