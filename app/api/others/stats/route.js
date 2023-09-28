import { NextResponse } from "next/server";
import STATS from "@/components/db/STATS";
import MongoConnection from "@/components/db/index";

await MongoConnection();

const updateData = async (key) => {
  try {
    const updateObj = { past24: 1, total: 1 };
    updateObj[key] = 1;

    const updated = await STATS.findOneAndUpdate(
      { _id: 1 },
      { $inc: updateObj },
      { new: true },
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
    await STATS.findOneAndUpdate({ _id: 1 }, { $set: { past24: 0 } });
  }
}

export async function POST(req) {
  const jsonData = await req.json();

  const data = {
    ok: true,
  };

  await updateData(jsonData.path);

  return new NextResponse(JSON.stringify(data, null, 4));
}

export async function GET(req) {
  const stats = await STATS.findOne({ _id: 1 });
  const data = {
    ok: true,
    ...stats._doc,
    href: req.nextUrl.href,
  };
  delete data._id;

  return new NextResponse(JSON.stringify(data, null, 4));
}
