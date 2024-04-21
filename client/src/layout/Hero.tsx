import logo from "@/images/logo.png";
import baner1 from "@/images/hero_banner_1.png";
import baner2 from "@/images/hero_banner_2.png";

const Hero = () => {
  const banners = [baner1, baner2];
  const randomBanner = banners[Math.floor(Math.random() * banners.length)];

  return (
    <div className="md:px-6">
      <div className="w-full mx-auto max-w-screen-lg flex flex-row justify-between items-center">
        <img
          className="hidden md:block md:w-64 lg:w-80"
          src={logo}
          alt="logo"
        />
        <img
          className="rounded w-full md:max-w-[460px] lg:max-w-[580px]"
          src={randomBanner}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Hero;
