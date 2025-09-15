import mongoose, { Schema } from "mongoose";

const VoteDetailSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["upvote", "downvote"], required: true },
  },
  { _id: false }
);

const ProblemSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    media: [{ type: String }],
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Resolved", "Ignored"],
      default: "Pending",
      index: true,
    },
    postedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    wardId: { type: Schema.Types.ObjectId, ref: "Ward", required: true },
    subscribers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    actionLogs: [{ type: Schema.Types.ObjectId, ref: "ActionLog" }],
    votes: {
      upvotes: { type: Number, default: 0 },
      downvotes: { type: Number, default: 0 },
    },
    voters: [VoteDetailSchema],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

ProblemSchema.index({ title: "text", description: "text" });

export default mongoose.model("Problem", ProblemSchema);
