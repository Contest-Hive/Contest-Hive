import { NextRequest } from "next/server";
import { escapeHTML } from "@/lib/MdtoHtml";
import { JsonResponse } from "../../(main)/default";

const URL = process.env.URL;

export async function POST(req: NextRequest) {
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
  const content = `
📧 New message from *${ip}
Message:

${message}
`.replace(/(?:\r\n|\r|\n)/g, "%0A");

  const url = URL + content;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.ok) {
      return await JsonResponse({
        ok: true,
        message: "Message sent successfully!",
      });
    }

    return await JsonResponse(
      {
        ok: false,
        message: "Try again!",
      },
      500,
    );
  } catch (error) {
    return await JsonResponse(
      {
        ok: false,
        message: "Something went wrong. Try again!",
      },
      500,
    );
  }
}
