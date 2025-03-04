"use server";
import client from "@/db/redis";

export async function updateData(key: "api" | "page"): Promise<any> {
  const multi = client.multi();

  // Increment the respective fields in the "stats" hash
  multi.hincrby("stats", "total", 1);
  multi.hincrby("stats", "past24", 1);

  if (key === "page") {
    multi.hincrby("stats", "past24page", 1);
    multi.hincrby("stats", "page", 1);
  } else if (key === "api") {
    multi.hincrby("stats", "past24api", 1);
    multi.hincrby("stats", "api", 1);
  } else {
    console.log("Error in Redis Update: Invalid Key Supplied");
    return null;
  }

  // Execute multi and check results
  try {
    const result = await multi.exec();
    if (!result) {
      console.log("Error in Redis Update: Failed to Update Stats");
      return null;
    }

    // Fetch updated stats after increment
    const afterStats = await client.hgetall("stats");

    return afterStats;

  } catch (error) {
    console.error("Error executing multi commands:", error);
    return null;
  }
}
