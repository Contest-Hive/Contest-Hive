import { NextRequest } from "next/server";
// import { escapeHTML } from "@/lib/MdtoHtml";
import { JsonResponse } from "../../default";
("../../default");
("../../default");
("../../default");

const URL = process.env.URL;

export async function POST(req: NextRequest) {
  console.log("Hello?")
  const ip = req.headers.get("x-real-ip") ?? "127.0.0.1";
  const jsonData = await req.json();
  const message = String(jsonData.message).trim();

  if (!message) {
    const data = {
      ok: false,
      message: "Empty message!",
    };
    return await JsonResponse(data, 400);
  }

  const result = await sendToAuthor(message, ip);
  return await JsonResponse(result, result.status_code);
}

export async function sendToAuthor(message: string, ip: string) {
  const content = `
📧 New message from ${ip}
Message:

${message}
`.replace(/(?:\r\n|\r|\n)/g, "%0A");

  const url = URL + content;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.ok) {
      return {
        ok: true,
        status_code: 200,
        message: "Message sent successfully!",
        description: "Thanks for your feedback.",
      };
    }

    return {
      ok: false,
      status_code: 400,
      message: "Message wasn't sent!",
      description: "Maybe poor connection? Please try again!",
    };
  } catch (error) {
    return {
      ok: false,
      status_code: 500,
      message: "Something went wrong.",
      description: "Server failed to respond. Please try again!",
    };
  }
}
