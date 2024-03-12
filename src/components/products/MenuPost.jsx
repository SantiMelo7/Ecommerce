"use client";

import { usePostProducts } from "@/hooks/useProducts";
import MenuItemProps from "./MenuItemProps";

export default function MenuPost({ className }) {
  const { products } = usePostProducts();

  const productsSlice = products.slice(0, 8);

  return (
    <>
      <section className="grid xl:grid-cols-4 md:grid-cols-2 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 md:max-w-screen-2xl md:mt-10 sm:max-w-screen-sm sm:mx-auto">
        {productsSlice.length > 0 &&
          productsSlice.map((text) => (
            <MenuItemProps className={className} {...text} />
          ))}
      </section>
    </>
  );
}
