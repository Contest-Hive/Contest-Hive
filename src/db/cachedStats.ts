"use server";

export async function fetchStats() {
  console.log("Called cached")
  try {
    const response = await fetch(
      "https://contest-hive.vercel.app/api/others/stats",
      {
        next: { revalidate: 3600 }, // 1-hour cache
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch stats");
    }

    return response.json();
  } catch (error) {
    console.error("Stats fetch error:", error);
    return null;
  }
}
