import logo from "@/images/logo.png";
import baner from "@/images/hero-banner.png";

const Hero = () => {
  return (
    <div className="md:px-6">
      <div className="w-full mx-auto max-w-screen-xl flex flex-row justify-between items-center">
        <img
          className="hidden md:block md:w-64 lg:w-96"
          src={logo}
          alt="logo"
        />
        <img
          className="w-full md:max-w-[460px] lg:max-w-[580px] xl:mr-20"
          src={baner}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Hero;
