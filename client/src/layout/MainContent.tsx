import { Sidebar } from "./";

const MainContent = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="py-5 px-4 md:px-6">
      <main className="w-full mx-auto max-w-screen-xl flex flex-row gap-4">
        {children} <Sidebar />
      </main>
    </div>
  );
};

export default MainContent;
