import express from "express";
import {
  acceptFriendRequest,
  sendFriendRequest,
  declineFriendRequest,
  getAllFriends,
  getFriendRequests,
} from "../controller/friendController";
const router = express.Router();

router.post("/request", sendFriendRequest);
router.post("/requests/:requestId/accept", acceptFriendRequest);
router.post("/requests/:requestId/decline", declineFriendRequest);
router.post("/", getAllFriends);
router.post("/request", getFriendRequests);

export default router;
