import GetPlatformPage from "@/components/docs/GetPlatformPage";

const page = ({ params }) => {
  return (
    <>
      <GetPlatformPage platformName={params.platformName} />
    </>
  );
};

export default page;
