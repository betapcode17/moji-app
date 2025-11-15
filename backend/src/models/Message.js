import mongoose, { Schema } from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    conservationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conservation",
      require: true,
      index: true, //tang toc do truy van
    },
    SenderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    imgUrl: {
      type: String,
    },
  },
  {
    // để tự tạo trường updated at và created at
    timestamps: true,
  }
);

messageSchema.index({ conservationId: 1, createAt: -1 });

const Message = mongoose.model("Message", messageSchema);

export default Message;
