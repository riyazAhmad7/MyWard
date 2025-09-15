import mongoose, { Schema } from "mongoose";

const ActionLogSchema = new Schema(
  {
    problemId: { type: Schema.Types.ObjectId, ref: "Problem", required: true },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "Authority",
      required: true,
    },
    actionDescription: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

export default mongoose.model("ActionLog", ActionLogSchema);
