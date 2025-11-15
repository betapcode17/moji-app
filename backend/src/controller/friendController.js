import Friend from "../models/Friend";
import FriendRequest from "../models/FriendRequest";

export const sendFriendRequest = async (req, res) => {
  try {
  } catch (error) {
    console.error("Lỗi khi gửi lời mời kết bạn : " + error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const acceptFriendRequest = async (req, res) => {
  try {
  } catch (error) {
    console.error("Lỗi khi chấp nhận lời mời kết bạn : " + error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const declineFriendRequest = async (req, res) => {
  try {
  } catch (error) {
    console.error("Lỗi khi từ chối lời mời kết bạn : " + error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const getAllFriends = async (req, res) => {
  try {
  } catch (error) {
    console.error("Lỗi khi lấy danh sách kết bạn : " + error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const getFriendRequests = async (req, res) => {
  try {
  } catch (error) {
    console.error("Lỗi khi lấy lời mời kết bạn : " + error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};
