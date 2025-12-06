import Friend from "../models/Friend.js";
import FriendRequest from "../models/FriendRequest.js";
import User from "../models/User.js";

export const sendFriendRequest = async (req, res) => {
  try {
    const { to, message } = req.body;
    const from = req.user._id;

    //gui lai cho chinh minh -> 404
    if (to == from) {
      return res
        .status(404)
        .json({ message: "Không thể gửi lời mời cho chính mình" });
    }
    //ton tai user
    const userExists = await User.exists({ _id: to });
    if (!userExists) {
      return res.status(404).json({ message: "Không tìm thấy user" });
    }
    //da la ban , da gui ket ban

    const userA = from.toString();
    const userB = to.toString();
    if (userA > userB) {
      [userA, userB] = [userB, userA];
    }

    const [alreadyFriend, existingRequest] = await Promise.all([
      Friend.findOne({ userA, userB }),
      FriendRequest.findOne({
        $or: [
          { from, to },
          { from: to, to: from },
        ],
      }),
    ]);
    if (alreadyFriend) {
      return res
        .status(400)
        .json({ message: "Đã là bạn không thể gửi lại lời mời kết bạn" });
    }
    if (existingRequest) {
      return res
        .status(400)
        .json({ message: "Đã gửi lời mời kết bạn đang chờ" });
    }
    const request = await FriendRequest.create({ from, to, message });
    return res
      .status(201)
      .json({ message: "gửi lời mời kết bạn thành công" }, request);
  } catch (error) {
    console.error("Lỗi khi gửi lời mời kết bạn : " + error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const acceptFriendRequest = async (req, res) => {
  try {
    const { requestId } = req.params;
    const userId = req.user._id;

    const request = await FriendRequest.findById(requestId);
    if (!request) {
      return res.status(404).json({ message: "Lời mời kết bạn không tồn tại" });
    }

    if (request.to.string() !== userId) {
      return res
        .status(403)
        .json({ message: "Bạn không có quyền đồng ý lời mời kết bạn này" });
    }

    const friend = await Friend.create({
      userA: request.from,
      userB: request.to,
    });

    //Xoa sau khi gui request
    await FriendRequest.findByIdAndDelete(requestId);

    // lay thong tin cua ban
    const from = await User.findById(request.from)
      .select("_id displayName avatarUrl")
      .lean(); // lean thay vì trả document mongoose thì sẽ trả về object

    return res.status(200).json(
      { message: "Kết bạn thành công" },
      {
        newFriend: {
          id: from?._id,
          displayName: from?.displayName,
          avatarUrl: from?.avatarUrl,
        },
      }
    );
  } catch (error) {
    console.error("Lỗi khi chấp nhận lời mời kết bạn : " + error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const declineFriendRequest = async (req, res) => {
  try {
    const { requestId } = req.params;
    const userId = req.user._id;
    const request = await FriendRequest.findById(requestId);
    if (!request) {
      return res.status(404).json({ message: "Lời mời kết bạn không tồn tại" });
    }
    if (request.to.string() !== userId) {
      return res
        .status(403)
        .json({ message: "Bạn không có quyền từ chối kết bạn" });
    }

    await FriendRequest.findByIdAndDelete(requestId);
    return res.sendStatus(204);
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
