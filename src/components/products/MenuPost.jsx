"use client";

import { useProducts } from "@/hooks/useProducts";
import MenuItemProps from "./MenuItemProps";
import { ROUTES } from "@/util/constants";
import Image from "next/image";
import MainTitle from "../layout/MainTitle";
export default function MenuPost({ className, config }) {
  const { products } = useProducts();
  let productsToDisplay = products;
  if (config.slice) {
    productsToDisplay = products.slice(0, config.slice);
  }

  return (
    <div className="relative">
      <Image
        src="/fondo-global.webp"
        width={900}
        height={50}
        className="object-center object-cover w-full md:h-[95vh] sm:h-full -z-10 absolute"
        alt="fondo-global"
      />
      <MainTitle title="Products" subtTitle="Some of the products we have" />
      <section className="grid md:grid-cols-4 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 w-full h-full md:max-w-screen-xl md:mt-10 sm:max-w-screen-sm sm:mx-auto">
        {productsToDisplay.length > 0 &&
          productsToDisplay.map((text) => (
            <div key={text._id}>
              {config.link ? (
                <a href={`${ROUTES.productsItemsEdit}/${text._id}`}>
                  <MenuItemProps
                    className={className}
                    config={config}
                    {...text}
                  />
                </a>
              ) : (
                <MenuItemProps
                  className={className}
                  config={config}
                  {...text}
                />
              )}
            </div>
          ))}
      </section>
    </div>
  );
}
