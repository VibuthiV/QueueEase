// controllers/queueController.js
import Token from "../models/Token.js";
import Service from "../models/Service.js";
import mongoose from "mongoose";

export async function joinQueue(req, res) {
  try {
    const { serviceId, userId } = req.body;
    if (!serviceId) return res.status(400).json({ message: "serviceId required" });

    // get current max tokenNo for this service
    const last = await Token.find({ serviceId }).sort({ tokenNo: -1 }).limit(1);
    const nextNo = last.length ? last[0].tokenNo + 1 : 1;

    const token = await Token.create({ tokenNo: nextNo, serviceId, userId: userId || null });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function getQueueForService(req, res) {
  try {
    const { serviceId } = req.params;
    const queue = await Token.find({ serviceId, status: "waiting" }).sort({ createdAt: 1 });
    res.json({ queue });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function callNextToken(req, res) {
  try {
    const { serviceId } = req.params;
    // find earliest waiting token
    const next = await Token.findOne({ serviceId, status: "waiting" }).sort({ createdAt: 1 });
    if (!next) return res.status(404).json({ message: "No waiting tokens" });

    next.status = "called";
    await next.save();
    res.json({ token: next });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}
