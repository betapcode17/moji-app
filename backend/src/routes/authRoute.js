import express from "express";
import { SignIn, SignOut, signUp,refreshToken } from "../controller/authController.js";
const router = express.Router();

router.post("/signup", signUp);

router.post("/signin", SignIn);

router.post("/signout", SignOut);

router.post("/refresh", refreshToken);
export default router;
