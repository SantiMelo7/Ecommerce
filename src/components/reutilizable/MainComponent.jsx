import HeroMenu from "./HeroMenu";
import MainTitle from "./MainTitle";
import MenuPost from "../products/MenuPost";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import AboutTec from "../about/AboutTec";

export default function MainComponent() {
  return (
    <>
      <div className=" bg-gray-800 relative -top-1 mb-3">
        <HeroMenu />
      </div>
      <div className="relative -top-4 bg-[#A7E4F1] pb-8 ">
        <MainTitle title="Products" subtTitle="Some of the products we have" />
        <MenuPost className="shadow-gray-800 bg-[#A5C2E2] hover:bg-[#57BBE9] animate-flip-x" />
      </div>
      <div className="relative -top-4 bg-gradient-to-r from-[#f56565] to-[#9b2c2c]">
        <AboutTec />
      </div>
      <div className="relative -top-4">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
