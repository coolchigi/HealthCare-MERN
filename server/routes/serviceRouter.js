import express from "express";

import { getServices, createService } from "../controllers/controller.js";

const router = express.Router();

router.get("/", getServices);
router.get("/", createService);

export default router;
