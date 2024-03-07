"use client";

import { usePostProducts } from "@/hooks/useProducts";
import MenuItemProps from "./MenuItemProps";
import { useCart } from "@/hooks-reducer/cart";

export default function MenuPost({ className }) {
  const { products } = usePostProducts();
  const { addToCard } = useCart();

  const productSlice = products.slice(0, 8);

  return (
    <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 md:max-w-screen-xl md:mt-10 sm:max-w-screen-sm sm:mx-auto">
      {productSlice.length > 0 &&
        productSlice.map((text) => (
          <div key={text.id}>
            <MenuItemProps
              addToCard={addToCard}
              className={className}
              {...text}
            />
          </div>
        ))}
    </section>
  );
}
