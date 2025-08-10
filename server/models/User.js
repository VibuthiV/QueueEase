// models/User.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
