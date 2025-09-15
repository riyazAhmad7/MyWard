import mongoose, { Schema } from "mongoose";

const VoteSchema = new Schema(
  {
    problemId: { type: Schema.Types.ObjectId, ref: "Problem", required: true },
    type: { type: String, enum: ["upvote", "downvote"], required: true },
  },
  { _id: false }
);

const UserSchema = new Schema(
  {
    aadhaarNumber: { type: String, unique: true, required: true, index: true },
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    password: { type: String, required: true },
    wardId: { type: Schema.Types.ObjectId, ref: "Ward" },
    problemsPosted: [{ type: Schema.Types.ObjectId, ref: "Problem" }],
    subscriptions: [{ type: Schema.Types.ObjectId, ref: "Problem" }],
    votes: [VoteSchema],
  },
  { timestamps: true }
);

UserSchema.index({ name: "text", email: "text" });

export default mongoose.model("User", UserSchema);
