import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./libs/db.js";
import authRoute from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRouter.js";
import { protectedRoute } from "./middlewares/authMiddleware.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(cookieParser());

// Public routes
app.use("/api/auth", authRoute);

// Private routes
app.use("/api/users", protectedRoute, userRoute);

// Connect DB & Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server bắt đầu trên cổng ${PORT}`);
  });
});
