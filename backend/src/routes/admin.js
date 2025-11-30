import { Router } from "express";
import { createLesson, deleteLesson } from "../controllers/adminController.js";
import { auth } from "../middleware/auth.js";
import { admin } from "../middleware/admin.js";

const router = Router();

router.post("/lesson", auth, admin, createLesson);
router.delete("/lesson/:id", auth, admin, deleteLesson);

export default router;
