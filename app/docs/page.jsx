import SideBar from "@/components/docs/SideBar";
import Content from "@/components/docs/Content";

const page = () => {
  return (
    <div className="bg-gray-950 text-gray-200">
      <SideBar />
      <div className="p-4 md:ml-64"> 
      <Content />
      </div>
    </div>
  );
};

export default page;
