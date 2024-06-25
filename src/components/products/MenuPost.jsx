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
      {config.results ? (
        <div className="mt-5">
          <NoResults item={products} />
        </div>
      ) : null}
      {config.title ? (
        <MainTitle title="Products" subtTitle="Some of the products we have" />
      ) : null}
      <section className="grid lg:grid-cols-4 md:grid-cols-2 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 w-full h-full md:max-w-screen-2xl md:mt-10 sm:max-w-screen-sm sm:mx-auto rounded-md">
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
