import SideBar from "@/components/docs/SideBar";
import NavBar from "@/components/docs/NavBar";
import Content from "@/components/docs/Content";

const page = () => {
  return (
    <div className="bg-gray-950 text-gray-200">
      <NavBar />
      <SideBar />
      <Content />
    </div>
  );
};

export default page;
