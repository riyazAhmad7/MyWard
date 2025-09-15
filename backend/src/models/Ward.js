import mongoose, { Schema } from "mongoose";

const WardSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    location: { type: String },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    authorities: [{ type: Schema.Types.ObjectId, ref: "Authority" }],
    problems: [{ type: Schema.Types.ObjectId, ref: "Problem" }],
  },
  { timestamps: true }
);

export default mongoose.model("Ward", WardSchema);
