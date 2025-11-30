import { Router } from "express";
import { createQuestion, deleteQuestion } from "../controllers/questionController.js";
import { auth } from "../middleware/auth.js";
import { admin } from "../middleware/admin.js";

const router = Router();

router.post("/", auth, admin, createQuestion);
router.delete("/:id", auth, admin, deleteQuestion);

export default router;
