import SideBar from "@/components/docs/SideBar";

const layout = ({ children }) => {
  return (
    <main>
      <SideBar />
      <div className="p-4 md:ml-64">{children}</div>
    </main>
  );
};

export default layout;
