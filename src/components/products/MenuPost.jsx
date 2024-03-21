"use client";

import { useProducts } from "@/hooks/useProducts";
import MenuItemProps from "./MenuItemProps";
import Image from "next/image";
import MainTitle from "../layout/MainTitle";
import NoResults from "../layout/NoResults";
export default function MenuPost({ className, config }) {
  const { products } = useProducts();
  let productsToDisplay = products;
  if (config.slice) {
    productsToDisplay = products.slice(0, config.slice);
  }

  return (
    <div className="relative">
      {config.imageFound ? (
        <Image
          src="/fondo-global.webp"
          width={900}
          height={50}
          className="object-center object-cover w-full h-full -z-10 absolute"
          alt="fondo-global"
        />
      ) : null}
      {config.results ? (
        <div className="mt-5">
          <NoResults item={products} />
        </div>
      ) : null}
      {config.title ? (
        <MainTitle title="Products" subtTitle="Some of the products we have" />
      ) : null}
      <section className="grid md:grid-cols-4 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 w-full h-full md:max-w-screen-xl md:mt-10 sm:max-w-screen-sm sm:mx-auto rounded-md">
        {productsToDisplay.length > 0 &&
          productsToDisplay.map((text) => (
            <div key={text._id} className={config.className}>
              {config.link ? (
                <a href={`/products-items/edit/${text._id}`}>
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
