import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

// Reusable URL validator
const isURL = (v) => {
  try {
    if (typeof v !== "string") return false;
    const u = new URL(v);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
};
const AddressSchema = new Schema(
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

const UserVoteSchema = new Schema(
  {
    problemId: { type: Schema.Types.ObjectId, ref: "Problem", required: true },
    type: { type: String, enum: ["up", "down"], required: true },
  },
  { _id: false }
);

const UserSchema = new Schema(
  {
    aadhaarNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/^\d{12}$/, "Aadhaar number must be 12 digits"],
      index: true,
    },
    aadhaarPhotos: {
      type: [
        {
          type: String,
          validate: {
            validator: isURL,
            message: "Invalid URL in aadhaarPhotos",
          },
        },
      ],
      default: [],
    },
    profilePicture: {
      type: String,
      validate: {
        validator: (v) => !v || isURL(v),
        message: "Invalid profilePicture URL",
      },
    },
    name: { type: String, trim: true, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^(?:[a-zA-Z0-9_'^&\+\-])+(?:\.(?:[a-zA-Z0-9_'^&\+\-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
        "Invalid email address",
      ],
      index: true,
    },
    password: { type: String, required: true, minlength: 8 },
    address: { type: AddressSchema },
    wardId: { type: Schema.Types.ObjectId, ref: "Ward" },
    role: {
      type: String,
      enum: ["user", "authority", "admin"],
      default: "user",
      index: true,
    },
    isVerified: { type: Boolean, default: false },
    verificationStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
      index: true,
    },
    problemsPosted: [{ type: Schema.Types.ObjectId, ref: "Problem" }],
    subscriptions: [{ type: Schema.Types.ObjectId, ref: "Problem" }],
    votes: { type: [UserVoteSchema], default: [] },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform(_doc, ret) {
        delete ret.password;
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Password hashing
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

UserSchema.methods.comparePassword = async function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
