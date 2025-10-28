import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5001;

// middlewares
//đọc request body dưới dạng json
app.use(express.json());
app.listen(PORT);
