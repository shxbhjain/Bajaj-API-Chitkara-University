import express from 'express';
import { healthHandler, bajajHandler } from "../controllers/bajaj.controller.js";

const router = express.Router();

router.get("/health", healthHandler);
router.post("/bfhl", bajajHandler);

export default router;
