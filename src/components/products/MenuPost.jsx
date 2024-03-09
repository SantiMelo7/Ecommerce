"use client";

import { usePostProducts } from "@/hooks/useProducts";
import MenuItemProps from "./MenuItemProps";

export default function MenuPost({ className }) {
  const { products } = usePostProducts();

  return (
    <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 md:max-w-screen-xl md:mt-10 sm:max-w-screen-sm sm:mx-auto">
      {products.length > 0 &&
        products.map((text) => (
          <div key={text.id}>
            <MenuItemProps className={className} {...text} />
          </div>
        ))}
    </section>
  );
}
