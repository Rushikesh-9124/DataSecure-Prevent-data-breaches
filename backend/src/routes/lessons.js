import { Router } from "express";
import { getAllLessons, getLesson } from "../controllers/lessonController.js";

const router = Router();

router.get("/", getAllLessons);
router.get("/:slug", getLesson);

export default router;
