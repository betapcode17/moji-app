import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import Session from "../models/Session.js";
import crypto from "crypto";
const ACCESS_TOKEN_TTL = 15 * 60 * 1000; // 15 phút
const REFRESH_TOKEN_TTL = 7 * 24 * 60 * 60 * 1000; // 7 ngày

export const signUp = async (req, res) => {
  try {
    const { username, password, email, firstName, lastName } = req.body;

    if (!username || !password || !email || !firstName || !lastName) {
      return res.status(400).json({
        message:
          "Không thể thiếu username, password, email, firstName và lastName",
      });
    }

    // Kiểm tra username đã tồn tại chưa
    const duplicate = await User.findOne({ username });
    if (duplicate) {
      return res.status(409).json({ message: "Username đã tồn tại" });
    }

    // Mã hóa password
    const hashPassword = await bcrypt.hash(password, 10);

    // Tạo user mới
    await User.create({
      username,
      hashedPassword: hashPassword, // đúng tên field trong schema
      email,
      displayName: `${firstName} ${lastName}`, // đúng kiểu camelCase
    });

    // Phản hồi
    return res.status(201).json({ message: "Đăng ký thành công" });
  } catch (error) {
    console.error("Lỗi khi gọi signUp:", error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const SignIn = async (req, res) => {
  try {
    // lấy input
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        message: "Không thể thiếu username hoặc password",
      });
    }
    // lấy hashedPassword trong db để so sánh với password input
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(401)
        .json({ message: "username hoặc password không chính xác" });
    }
    const passwordCorrect = await bcrypt.compare(password, user.hashedPassword);
    if (!passwordCorrect) {
      return res
        .status(401)
        .json({ message: "username hoặc password không chính xác" });
    }
    // nếu khớp , tạo accessToken với JWT
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: ACCESS_TOKEN_TTL }
    );
    //tạo refresh token
    const refreshToken = crypto.randomBytes(64).toString("hex");
    //tạo session mới để lưu refresh token
    await Session.create({
      userId: user._id,
      refreshToken,
      expiresAt: new Date(Date.now() + REFRESH_TOKEN_TTL),
    });
    // trả refresh token về trong cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true, //cookie không thể bị truy cập bởi javascript
      secure: true, // Chỉ gửi qua https
      sameSite: "none", //backend frontend chạy trên 2 domain khác nhau
      maxAge: REFRESH_TOKEN_TTL,
    });
    return res.status(200).json({
      message: `User ${user.displayName} đã đăng nhập thành công!`,
      accessToken,
    });
  } catch (error) {
    console.error("Lỗi khi gọi signUp:", error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const SignOut = async (req, res) => {
  try {
    // lấy refresh token từ cookie
    const token = req.cookies?.refreshToken;

    if (token) {
      // xóa refresh token trong Session
      await Session.deleteOne({ refreshToken: token });
      //Xóa cookie
      res.clearCookie("refreshToken");
    }
    return res.sendStatus(204);
  } catch (error) {
    console.error("Lỗi khi gọi SignOut", error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};
