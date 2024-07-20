import { updateData as updateStatsData } from "@/lib/dbConnect";

export async function getStatsData(update: "api" | "page") {
  // also increments whenever called
  const data = await updateStatsData(update);
  return [
    {
      title: "Today",
      value: data.past24page,
      description: "visited",
    },
    {
      title: "Total served",
      value: data.api,
      description: "API requests",
    },
    {
      title: "Total",
      value: data.page,
      description: "page visits",
    },
  ];
}

export async function sendMessage(message: string) {
  const response = await fetch("/api/others/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  return response.json();
}
