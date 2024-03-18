"use client";

import { usePostProducts } from "@/hooks/useProducts";
import MenuItemProps from "./MenuItemProps";

export default function MenuPost({ className, config }) {
  const { products } = usePostProducts();
  let productsToDisplay = products;
  if (config.slice) {
    productsToDisplay = products.slice(0, config.slice);
  }

  return (
    <>
      <section className="grid xl:grid-cols-4 md:grid-cols-2 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 md:max-w-screen-2xl md:mt-10 sm:max-w-screen-sm sm:mx-auto">
        {productsToDisplay.length > 0 &&
          productsToDisplay.map((text) => (
            <div key={text._id}>
              <MenuItemProps className={className} config={config} {...text} />
            </div>
          ))}
      </section>
    </>
  );
}
