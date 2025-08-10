// models/Service.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const ServiceSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String },
  avgServiceTimeMin: { type: Number, default: 10 }, // avg minutes per person
  adminId: { type: Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

export default mongoose.model("Service", ServiceSchema);
