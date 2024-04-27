import { Sidebar } from "./";

const MainContent = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="py-5 px-4 md:px-6">
      <main className="w-full min-h-screen mx-auto max-w-screen-lg flex flex-row gap-4 items-stretch">
        <div className="flex-1 min-h-full">{children}</div>
        <Sidebar />
      </main>
    </div>
  );
};

export default MainContent;
