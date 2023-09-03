import Home from "@/components/Home";
import Kontests from "@/components/Kontests";
import SimpleTable from "@/components/SimpleTable";
import Features from "@/components/Features";
import Content from "@/components/Content";

const page = () => {
  return (
    <>
      <Home />
      {/* <Kontests /> */}
      <SimpleTable />
      <Features />
      <Content />
    </>
  );
};

export default page;
