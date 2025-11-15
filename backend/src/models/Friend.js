import mongoose from "mongoose";

const friendSchema = new mongoose.Schema(
  {
    userA: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userB: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// chuan hoa save co nghia la truoc khi hanh dong save thi thuc hien trong function
friendSchema.pre("save", function (next) {
  const a = this.userA.toString();
  const b = this.userB.toString();

  if (a > b) {
    this.userA = mongoose.Types.ObjectId(b);
    this.userB = mongoose.Types.ObjectId(a);
  }
  next();
});

// unique : tạo index doc nhat
friendSchema.index({ userA: 1, userB: 1 }, { unique: true });

const Friend = mongoose.model("Friend", friendSchema);

export default Friend;
