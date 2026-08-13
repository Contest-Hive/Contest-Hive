"use server";

import { headers } from "next/headers";
import sendToAuthor from "@/server/sendMessage";

export default async function sendAPImessage(
  email: string,
  message: string,
): Promise<{ ok: boolean; message: string; description: string }> {
  const ip = (headers()).get("x-real-ip") ?? "127.0.0.1";
  return sendToAuthor(email, message, ip);
}