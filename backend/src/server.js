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

// middlewares
//đọc request body dưới dạng json
app.use(express.json());
app.use(cookieParser());

//public routes
app.use("/api/auth", authRoute);

//private routes
app.use(protectedRoute);
app.use("api/users", userRoute);

//use cors
app.use(
  cors({
    origin: "*", // Cho phép tất cả nguồn
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server bắt đầu trên cổng ${PORT}`);
  });
});
