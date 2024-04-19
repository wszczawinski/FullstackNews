import { Navbar } from ".";
import logo from "@/images/logo.png";

const Header = () => {
  return (
    <>
      <img src={logo} alt="" />
      <Navbar />
    </>
  );
};

export default Header;
