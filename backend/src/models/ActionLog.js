import mongoose from "mongoose";

const { Schema } = mongoose;

const ActionLogSchema = new Schema(
  {
    problemId: {
      type: Schema.Types.ObjectId,
      ref: "Problem",
      required: true,
      index: true,
    },
    updatedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    actionDescription: { type: String, required: true, trim: true },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const ActionLog =
  mongoose.models.ActionLog || mongoose.model("ActionLog", ActionLogSchema);
export default ActionLog;
