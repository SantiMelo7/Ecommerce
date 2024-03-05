"use client";

import { UsePostAboutProducts } from "@/hooks/useAboutImagesRestaurant";
import MainTitle from "../reutilizable/MainTitle";
import TextAbout from "../reutilizable/TextAbout";

export default function AboutRestaurant() {
  const { aboutProducts } = UsePostAboutProducts();
  return (
    <>
      <MainTitle title="About the restaurant" />
      <div className="flex flex-col xl:justify-start xl:text-start sm:text-center xl:w-[700px] sm:[200px]  gap-4">
        <TextAbout />
        <div className="grid grid-cols-3 gap-3 gap-x-10 max-w-2xl relative -top-96 left-[650px]">
          {aboutProducts.length > 0 &&
            aboutProducts.map((text, index) => (
              <div key={index}>
                <img
                  src={text.images}
                  className="rounded-md shadow-xl shadow-gray-00 ml-7"
                  width={200}
                  height={100}
                  alt="Images Restaurant"
                ></img>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
