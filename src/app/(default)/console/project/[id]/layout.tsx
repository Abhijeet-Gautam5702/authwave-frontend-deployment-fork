import Sidebar from "@/components/sidebar";

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full grow flex flex-row items-stretch justify-start">
        <Sidebar />
        <main className="w-4/5">{children}</main>
      </div>
    </>
  );
};

export default ProjectLayout;
