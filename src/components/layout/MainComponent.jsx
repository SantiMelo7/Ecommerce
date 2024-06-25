"use client";

import HeroMenu from "./HeroMenu";
import Footer from "../footer/Footer";
import MenuPost from "../products/MenuPost";

export default function MainComponent() {
  return (
    <>
      <div className="overflow-hidden">
        <HeroMenu />
      </div>
      <div className="w-full overflow-hidden">
        <MenuPost
          config={{
            ShowImages: true,
            ShowName: true,
            ShowDescription: false,
            ShowPrice: true,
            ShowCategory: true,
            slice: 8,
            imageFound: true,
            title: true,
          }}
        />
      </div>
      <div className="w-full overflow-hidden">
        <Footer />
      </div>
    </>
  );
}
