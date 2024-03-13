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
      <div className="relative top-5 pb-8 ">
        <MainTitle title="Products" subtTitle="Some of the products we have" />
        <MenuPost className="shadow-gray-600 bg-[#A5C2E2] hover:bg-[#57BBE9] animate-flip-x rounded-[10px] hover:transition-all hover:scale-110 inline-block" />
      </div>
      <div className="relative top-14 bg-gray-800">
        <AboutTec />
      </div>
      <div className="relative top-14">
        <Contact />
      </div>
      <div className="relative top-14">
        <Footer />
      </div>
    </>
  );
}