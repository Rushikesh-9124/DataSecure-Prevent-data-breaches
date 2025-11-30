import { Router } from "express";
import { register, login, getProfile, createAdmin, loginAdmin } from "../controllers/authController.js";
import { auth } from "../middleware/auth.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", auth, getProfile);
router.post("/create-admin", createAdmin);
router.post("/login-admin", loginAdmin)


export default router;
