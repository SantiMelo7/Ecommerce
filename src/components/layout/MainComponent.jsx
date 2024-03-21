"use client";

import HeroMenu from "./HeroMenu";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import AboutTec from "../about/AboutTec";
import MenuPost from "../products/MenuPost";
import Oferts from "@/Oferts";

export default function MainComponent() {
  return (
    <>
      <div className="overflow-hidden">
        <HeroMenu />
      </div>
      <div className="md:flex w-full md:h-[37vh] sm:h-full overflow-hidden">
        <Oferts
          margin="mt-1"
          width={140}
          height={140}
          src="/fondo-verde.webp"
          srcOfert="/ofert-1.webp"
          title="Starter offer"
          date="The offer is available all month"
          description="On your first purchase over $1000, you get an opening t-shirt"
        />
        <Oferts
          margin="mt-1"
          width={180}
          height={180}
          src="/fondo-azul.webp"
          srcOfert="/ofert-2.webp"
          title="Main Offer"
          date="Offer Valid on your first purchase"
          description="If in one year, you buy more than $3000 in products, you will win headphones"
        />
      </div>
      <div className="w-full overflow-hidden">
        <MenuPost
          config={{
            ShowImages: true,
            ShowName: true,
            ShowDescription: false,
            ShowPrice: true,
            ShowCategory: true,
            slice: 6,
            imageFound: true,
            title: true,
            //className: "bg-[#D8E19D] shadow-2xl shadow-[#333]",
          }}
        />
      </div>
      <div className="w-full overflow-hidden">
        <AboutTec />
      </div>
      <div className="md:flex w-full md:h-[30vh] sm:h-[40vh] overflow-hidden">
        <Oferts width={100} height={100} src="/combo-1.webp" />
        <Oferts width={130} height={130} src="/combo-2.webp" />
        <Oferts width={130} height={130} src="/combo-3.webp" />
      </div>
      <div className="w-full md:mt-0 sm:mt-[1000px] overflow-hidden">
        <Contact />
      </div>
      <div className="w-full overflow-hidden">
        <Footer />
      </div>
    </>
  );
}
