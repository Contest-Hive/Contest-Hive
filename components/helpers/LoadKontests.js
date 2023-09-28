import { use } from "react";

async function fetchContests() {
  const res = await fetch("https://contest-hive.vercel.app/api/all");
  const data = await res.json();
  return data;
}

export default function LoadKontests() {
  const test = use(fetchContests());

  return test;
}
