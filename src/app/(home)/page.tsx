import HomePage from "@/components/HomePage";

import Temp from "@/components/Temp";

export const fetchCache = "default-no-store";

export default async function Home() {
  return (
    <>
      {/* <Temp /> */}
      <HomePage />
    </>
  );
}
