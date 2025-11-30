import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

// Routes
import authRoutes from "./src/routes/auth.js";
import lessonRoutes from "./src/routes/lessons.js";
import questionRoutes from "./src/routes/questions.js";
import scoreRoutes from "./src/routes/score.js";
import adminRoutes from "./src/routes/admin.js";

dotenv.config();

// Initialize app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/score", scoreRoutes);
app.use("/api/admin", adminRoutes);

connectDB();

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Working"
  })
});

// Connect DB and Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, ()=>{
  console.log(`Server is listening on http://localhost:${PORT}`)
})