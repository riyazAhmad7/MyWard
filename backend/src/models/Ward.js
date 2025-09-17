import mongoose from "mongoose";

const { Schema } = mongoose;

const isNonEmpty = (v) => typeof v === "string" && v.trim().length > 0;

const LocationSchema = new Schema(
  {
    wardName: { type: String, trim: true },
    village: { type: String, trim: true },
    city: { type: String, trim: true },
    pincode: {
      type: String,
      trim: true,
      match: [/^\d{6}$/, "Pincode must be 6 digits"],
    },
    state: { type: String, trim: true },
    country: { type: String, trim: true, default: "India" },
  },
  { _id: false }
);

const WardSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      validate: [isNonEmpty, "Name is required"],
    },
    location: { type: LocationSchema },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    authorities: [{ type: Schema.Types.ObjectId, ref: "User" }],
    problems: [{ type: Schema.Types.ObjectId, ref: "Problem" }],
  },
  { timestamps: true }
);

WardSchema.index({ name: 1 }, { unique: false });

const Ward = mongoose.models.Ward || mongoose.model("Ward", WardSchema);
export default Ward;
