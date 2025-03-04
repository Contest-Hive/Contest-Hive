import { updateData } from "@/db/updateStats";
import { NextRequest } from "next/server";
import { JsonResponse } from "@/app/api/default";
import client from "@/db/redis"; // Import the Redis client

export async function POST(req: NextRequest) {
  try {
    const jsonData = await req.json();
    const { path } = jsonData;

    // Call the updateData function to increment the stats in Redis
    await updateData(path);

    return JsonResponse({ ok: true });
  } catch (error) {
    console.error("Error during POST:", error);
    return JsonResponse({ ok: false }, 500);
  }
}

export async function GET(req: NextRequest) {
  try {
    // Fetch the stats from Redis
    const stats = await client.hgetall("stats");

    // Define the desired order of keys
    const order = [
      "past24",
      "total",
      "page",
      "api",
      "past24page",
      "past24api"
    ];

    // Reorder the stats based on the order array
    const orderedStats: { [key: string]: string } = {};
    for (const key of order) {
      if (stats[key]) {
        orderedStats[key] = stats[key];
      }
    }

    const data = {
      ok: true,
      ...orderedStats,
      ip: req.headers.get("x-real-ip") || "127.0.0.1",
    };

    return JsonResponse(data);
  } catch (error) {
    console.error("Error during GET:", error);
    return JsonResponse({ ok: false }, 500);
  }
}