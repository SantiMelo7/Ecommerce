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
      <div className="md:flex w-screen md:h-[25vh] sm:h-[45vh]">
        <Oferts
          margin="mt-1"
          width={100}
          height={100}
          src="/fondo-verde.webp"
          srcOfert="/ofert-1.webp"
          title="Oferta de arranque"
          date="Todo el mes esta disponible la oferta"
          description="En tu primera compra mayor a $1000, te llevas una playera de inaguración"
        />
        <Oferts
          margin="mt-1"
          width={130}
          height={130}
          src="/fondo-azul.webp"
          srcOfert="/ofert-2.webp"
          title="Oferta Principal"
          date="Oferta Válida en tu primera compra"
          description="Si en un año, compras mas de $3000 en productos, te ganas unos audifonos"
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
