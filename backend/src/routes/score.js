import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { saveScore, getUserScores } from "../controllers/scoreController.js";

const router = Router();

router.post("/save", auth, saveScore);
router.get("/user", auth, getUserScores);

export default router;
