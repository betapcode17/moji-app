import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./libs/db";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5001;

// middlewares
//đọc request body dưới dạng json
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server bắt đầu trên cổng ${PORT}`);
  });
});
app.use(express.json());
