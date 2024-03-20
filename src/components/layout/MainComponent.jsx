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
      <div className="">
        <HeroMenu />
      </div>
      <div className="md:flex w-screen md:h-[30vh] sm:h-[40vh]">
        <Oferts
          margin="mt-1"
          width={130}
          height={130}
          src="/fondo-verde.webp"
          srcOfert="/ofert-1.webp"
          title="Starter offer"
          date="The offer is available all month"
          description="On your first purchase over $1000, you get an opening t-shirt"
        />
        <Oferts
          margin="mt-1"
          width={150}
          height={150}
          src="/fondo-azul.webp"
          srcOfert="/ofert-2.webp"
          title="Main Offer"
          date="Offer Valid on your first purchase"
          description="If in a year, you buy more than $3000 in products, you will win some headphones"
        />
      </div>
      <div className="w-full md:mt-0 sm:mt-[260px]">
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
      <div className="w-full md:mt-10 sm:mt-0">
        <AboutTec />
      </div>
      <div className="w-full">
        <Contact />
      </div>
      <div className="w-full md:mt-10 sm:mt-0">
        <Footer />
      </div>
    </>
  );
}
