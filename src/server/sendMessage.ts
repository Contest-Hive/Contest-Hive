"use server";

import { escapeHTML } from "@/lib/utils";

const API_URL = process.env.URL;

export default async function sendToAuthor(
  email: string,
  message: string,
  ip: string,
) {
  const content = `
📧 New message from ${ip}
Email: <code>${escapeHTML(email)}</code>
Message:

${escapeHTML(message)}
`.trim();

  const url = new URL(API_URL);

  try {
    const response = await fetch(url.origin + url.pathname, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...Object.fromEntries(url.searchParams.entries()),
        text: content,
        parse_mode: "HTML",
      }),
    });
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
