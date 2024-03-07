import HeroMenu from "./HeroMenu";
import MainTitle from "./MainTitle";
import MenuPost from "../products/MenuPost";
import AboutRestaurant from "../about/AboutRestaurant";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

export default function MainComponent() {
  return (
    <>
      <div className=" bg-gray-800 relative -top-1">
        <HeroMenu />
      </div>
      <div className="md:mt-10 sm:mt-24">
        <MainTitle title="Products" subtTitle="Some of the products we have" />
        <MenuPost className="shadow-blue-100 bg-[#A5C2E2] hover:bg-[#57BBE9]" />
      </div>
      <AboutRestaurant />
      <Contact />
      <Footer />
    </>
  );
}
