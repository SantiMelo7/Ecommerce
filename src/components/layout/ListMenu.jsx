"use client";

import { useCart } from "@/hooks-reducer/cart";
import { CartIcon } from "../reutilizable/Icons";

export default function ListMenu() {
  const { cart } = useCart();
  return (
    <>
      <ul className="flex gap-x-4 text-xl">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/categories">Categories</a>
        </li>
        <li>
          <a href="/products">All Products</a>
        </li>
        <li>
          <a href="/cart" className="relative left-20">
            <CartIcon />
          </a>
          <div className="bg-blue-200 h-[2vh] w-4 rounded-[20px] relative left-6 -top-7">
            <div className="relative text-black flex justify-center items-center text-sm">
              {cart}
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
