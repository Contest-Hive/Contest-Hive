"use server";
import STATS from "@/db/schemas/STATS";
import MongoConnection from "@/db/index";
import { fetchStats } from "./cachedStats"; // Assuming previous artifact's file

export async function updateData(key: "api" | "page") {
  try {
    await MongoConnection();

    let updateObj: { [key: string]: number } = { total: 1, past24: 1 };
    updateObj[key] = 1;

    if (key === "page") {
      updateObj["past24page"] = 1;
      updateObj["page"] = 1;
    } else if (key === "api") {
      updateObj["past24api"] = 1;
      updateObj["api"] = 1;
    } else {
      console.log("Error in Mongo Update: Invalid Key Supplied");
      return await fetchStats();
    }

    const updated = await STATS.findOneAndUpdate(
      { _id: 1 },
      { $inc: updateObj },
    );

    if (!updated) {
      console.log("Error in Mongo Update: Failed to Update Stats");
      return await fetchStats();
    }

    return updated;
  } catch (error) {
    console.error("MongoDB Connection/Update Error:", error);
    return await fetchStats();
  }
}
