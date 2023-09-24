import { NextResponse } from "next/server";

const URL = process.env.URL;

export async function POST(req) {
  const jsonData = await req.json();
  const userName = String(jsonData.name).trim();
  const email = String(jsonData.email).trim();
  const message = String(jsonData.message).trim();

  if (!userName || !email || !message) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please fill all the fields!",
      },
      {
        status: 500,
      },
    );
  }

  const content = `
Name : <b>${userName}</b>
Email : <code>${email}</code>
Message:
${message}
`.replace(/(?:\r\n|\r|\n)/g, "%0A");

  const url = URL + content;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.ok) {
      return NextResponse.json(
        {
          ok: true,
          message: "Success!",
        },
        {
          status: 200,
        },
      );
    }

    return NextResponse.json(
      {
        ok: false,
        message: "Try again!",
      },
      {
        status: 500,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong!",
      },
      {
        status: 500,
      },
    );
  }
}
