import mongoose, { Schema } from "mongoose";

const AuthoritySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    password: { type: String, required: true },
    designation: { type: String, required: true },
    wardId: { type: Schema.Types.ObjectId, ref: "Ward", required: true },
    problemsHandled: [{ type: Schema.Types.ObjectId, ref: "Problem" }],
  },
  { timestamps: true }
);

export default mongoose.model("Authority", AuthoritySchema);
