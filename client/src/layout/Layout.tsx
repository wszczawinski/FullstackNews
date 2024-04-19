import { Outlet } from "react-router";

import { Footer, Header, MainContent } from ".";

const Layout = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
};

export default Layout;
