import { NextResponse } from "next/server";
import STATS from "@/components/db/STATS";
import MongoConnection from "@/components/db/index";

/**
 * Updates a document in the MongoDB database.
 * It increments the values of the `past24`, `total`, and a dynamic key specified by the `key` parameter.
 * If the update is successful, it returns the updated document; otherwise, it logs an error message.
 *
 * @param {string} key - The dynamic key used to increment its value in the document.
 */
const updateData = async (key) => {
  await MongoConnection(); // Make sure we're connected to the database
  try {
    const updateObj = { past24: 1, total: 1 };
    updateObj[key] = 1;

    const updated = await STATS.findOneAndUpdate(
      { _id: 1 },
      { $inc: updateObj },
    );

    if (!updated) console.log("Error in Mongo Update: Key Not Found");
  } catch (error) {
    console.error("Error: ", error);
  }
};

const localData = { date: new Date().getDate() };
async function reset24hoursData() {
  // Update the date if it's not set
  // change the date if it's not the same

  const date = new Date().getDate();
  if (localData.date !== date) {
    localData.date = date;
    console.log("Resetting 24 hours data");
    await STATS.findOneAndUpdate({ _id: 1 }, { $set: { past24: 0 } });
  }
}

export async function POST(req) {
  const jsonData = await req.json();
  await reset24hoursData(); // Reset the 24 hours data if needed

  const { path} = jsonData;

  await updateData(path);

  return new NextResponse(JSON.stringify({ ok: true }, null, 2));
}

export async function GET(req) {
  const stats = await STATS.findOne({ _id: 1 });
  const data = {
    ok: true,
    ...stats._doc,
    href: req.nextUrl.href,
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
}
