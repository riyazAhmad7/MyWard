import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    problemId: { type: Schema.Types.ObjectId, ref: "Problem", required: true },
    commentedBy: {
      type: Schema.Types.ObjectId,
      refPath: "commentedByModel",
      required: true,
    },
    commentedByModel: {
      type: String,
      enum: ["User", "Authority"],
      required: true,
    },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    replies: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: false }
);

export default mongoose.model("Comment", CommentSchema);
