import mongoose from "mongoose";

const StatsSchema = new mongoose.Schema({
  _id: { type: Number },
  api: { type: Number },
  page: { type: Number },
  total: { type: Number },
  past24: { type: Number },
  past24api: { type: Number },
  past24page: { type: Number },
});

export default mongoose.models.Stats ||
  mongoose.model("Stats", StatsSchema, "contest-hive");
