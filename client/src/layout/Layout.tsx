import { Outlet } from "react-router";
import { Footer, Navbar } from ".";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
