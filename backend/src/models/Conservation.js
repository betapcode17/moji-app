import mongoose, { Schema } from "mongoose";

const participantSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    joinAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    _id: false,
  }
);

const groupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    createBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    _id: false,
  }
);

const lastMessageSchema = new mongoose.Schema(
  {
    // id cua tin nhan goc
    _id: { type: String },
    senderId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      default: null,
    },
  },
  {
    _id: false,
  }
);

const conservationSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["direct", "group"],
      require: true,
    },
    // nhung nguoi tham gia hoi thoai tham gia thoi gian nao
    participants: {
      type: [participantSchema],
      required: true,
    },
    // thuoc nhom nao ten nhom tao boi ai
    group: {
      type: groupSchema,
      required: true,
    },
    lastMessageAt: {
      type: Date,
    },
    seenBy: {
      senderId: Schema.Types.ObjectId,
      ref: "User",
    },
    lastMessage: {
      type: lastMessageSchema,
      default: null,
    },
    unreadCounts: {
      type: Map,
      of: Number,
      default: {},
    },
  },
  { timestamps: true }
);

conservationSchema.index({ "participants.userId": 1, lastMessageAt: -1 });

const Conservation = mongoose.model("Conservation", conservationSchema);

export default Conservation;
