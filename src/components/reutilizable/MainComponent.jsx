import HeroMenu from "./HeroMenu";
import MainTitle from "./MainTitle";
import MenuPost from "../products/MenuPost";
import Header from "../layout/Header";
import AboutRestaurant from "../about/AboutRestaurant";

export default function MainComponent() {
  return (
    <>
      <div className=" bg-gray-800 -z-10">
        <Header />
        <HeroMenu />
      </div>
      <div className="mt-32">
        <MainTitle
          title="Menu"
          subtTitle="Here you will find part of the menu of our restaurant"
        />
        <MenuPost className="shadow-blue-100 bg-[#A5C2E2] hover:bg-[#57BBE9]" />
      </div>
      <AboutRestaurant />
    </>
  );
}
