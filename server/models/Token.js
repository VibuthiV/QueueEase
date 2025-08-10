// models/Token.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const TokenSchema = new Schema({
  tokenNo: { type: Number, required: true },
  serviceId: { type: Schema.Types.ObjectId, ref: "Service", required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["waiting","called","done","no-show"], default: "waiting" },
  createdAt: { type: Date, default: Date.now },
  checkedIn: { type: Boolean, default: false }
});

TokenSchema.index({ serviceId: 1, tokenNo: 1 }, { unique: true });

export default mongoose.model("Token", TokenSchema);
