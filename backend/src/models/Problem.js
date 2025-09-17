import mongoose from "mongoose";

const { Schema } = mongoose;

const isURL = (v) => {
  try {
    if (typeof v !== "string") return false;
    const u = new URL(v);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
};

const VoterSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["up", "down"], required: true },
  },
  { _id: false }
);

const ProblemSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    media: {
      type: [
        {
          type: String,
          validate: { validator: isURL, message: "Invalid media URL" },
        },
      ],
      default: [],
    },
    status: {
      type: String,
      enum: ["pending", "in_progress", "resolved"],
      default: "pending",
      index: true,
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    wardId: {
      type: Schema.Types.ObjectId,
      ref: "Ward",
      required: true,
      index: true,
    },
    subscribers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    actionLogs: [{ type: Schema.Types.ObjectId, ref: "ActionLog" }],
    votes: {
      upvotes: { type: Number, default: 0, min: 0 },
      downvotes: { type: Number, default: 0, min: 0 },
    },
    voters: { type: [VoterSchema], default: [] },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

ProblemSchema.index({ wardId: 1, status: 1 });

const Problem =
  mongoose.models.Problem || mongoose.model("Problem", ProblemSchema);
export default Problem;
