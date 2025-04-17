import mongoose from "mongoose";

export interface Stats {
  _id: number;
  api: number;
  page: number;
  total: number;
  past24: number;
  past24api: number;
  past24page: number;
}

const StatsSchema = new mongoose.Schema<Stats>({
  _id: { type: Number },
  api: { type: Number },
  page: { type: Number },
  total: { type: Number },
  past24: { type: Number },
  past24api: { type: Number },
  past24page: { type: Number },
});

export default (mongoose.models.Stats as mongoose.Model<Stats>) || 
  mongoose.model<Stats>("Stats", StatsSchema, "contest-hive");