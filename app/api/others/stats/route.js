import { NextResponse } from "next/server";
import STATS from "@/components/db/STATS";
import MongoConnection from "@/components/db/index";


await MongoConnection(); // Make sure we're connected to the database

/**
 * Updates a document in the MongoDB database.
 * It increments the values of the `past24`, `total`, and a dynamic key specified by the `key` parameter.
 * If the update is successful, it returns the updated document; otherwise, it logs an error message.
 *
 * @param {string} key - The dynamic key used to increment its value in the document.
 */
const updateData = async (key) => {
  let updateObj = { total: 1, past24: 1 };
  updateObj[key] = 1;
  if (key === "page") {
    updateObj["past24page"] = 1;
    updateObj["page"] = 1;
  } else if (key === "api") {
    updateObj["past24api"] = 1;
    updateObj["api"] = 1;
  } else {
    updateObj = {};
    console.log("Error: Invalid Key");
    return;
  }
  const updated = await STATS.findOneAndUpdate({ _id: 1 }, { $inc: updateObj });
  if (!updated) console.log("Error in Mongo Update: Key Not Found");
};

export async function POST(req) {
  try {
    const jsonData = await req.json();

    const { path } = jsonData;

    await updateData(path);

    return new NextResponse(JSON.stringify({ ok: true }, null, 2));
  } catch {
    return new NextResponse(JSON.stringify({ ok: false }, null, 2));
  }
}

export async function GET(req) {
  try {
    const stats = await STATS.findOne({ _id: 1 });
    const data = {
      ok: true,
      ...stats._doc,
      href: req.nextUrl.href,
      ip: req.headers.get("x-real-ip") || "127.0.0.1",
    };
    delete data._id;

    return new NextResponse(JSON.stringify(data, null, 2), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "*",
      },
    });
  } catch {
    return new NextResponse(JSON.stringify({ ok: false }, null, 2));
  }
}
