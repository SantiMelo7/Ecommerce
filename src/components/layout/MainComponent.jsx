"use client";

import HeroMenu from "./HeroMenu";
import MainTitle from "./MainTitle";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import AboutTec from "../about/AboutTec";
import MenuPost from "../products/MenuPost";

export default function MainComponent() {
  return (
    <>
      <div className=" bg-gray-800 relative ">
        <HeroMenu />
      </div>
      <div className="relative pb-8">
        <MainTitle title="Products" subtTitle="Some of the products we have" />
        <MenuPost
          config={{
            ShowImages: true,
            ShowName: true,
            ShowDescription: false,
            ShowPrice: true,
            ShowCategory: true,
            slice: 6,
          }}
        />
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
