"use client";

import HeroMenu from "./HeroMenu";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import AboutTec from "../about/AboutTec";
import MenuPost from "../products/MenuPost";

export default function MainComponent() {
  return (
    <>
      <div className="overflow-hidden">
        <HeroMenu />
      </div>
      {/*<div className="md:flex w-screen md:h-[20vh] sm:h-[40vh] overflow-hidden">
        <Oferts
          margin="mt-1"
          src="/fondo-verde.webp"
          title="Starter offer"
          date="The offer is available all month"
          description="On your first purchase over $1000, you get an opening t-shirt"
          regalo="Playera de tu elección"
        />
        <Oferts
          margin="mt-1"
          src="/fondo-azul.webp"
          title="Main Offer"
          date="Offer Valid on your first purchase"
          description="If in a year, you buy more than $3000 in products, you will win some headphones"
          regalo="Audifonos Bluethoot Marca Samsung"
        />
  </div>*/}
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
            //className: "bg-[#D8E19D] shadow-2xl shadow-[#333]",
          }}
        />
      </div>
      <div className="w-full overflow-hidden">
        <AboutTec />
      </div>
      {/*<div className="w-[33.9%] overflow-hidden">
        <Combos src="/fondo-azul.webp" />
        <Combos src="/fondo-global.webp" title="Combos Espectaculares" />
        <Combos src="/fondo-verde.webp" />
        </div>*/}
      <div className="w-full overflow-hidden">
        <Contact />
      </div>
      <div className="w-full overflow-hidden">
        <Footer />
      </div>
    </>
  );
}
