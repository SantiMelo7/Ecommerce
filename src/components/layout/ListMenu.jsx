"use client";

import { CartIcon } from "../reutilizable/Icons";
import { useContext } from "react";
import { CartContext } from "@/context/AppProvider";

export default function ListMenu() {
  const { cartProducts } = useContext(CartContext);
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
          <div className="bg-blue-200 h-[2.3vh] w-4 rounded-[5px] relative left-7 -top-7">
            <div className="relative text-black flex justify-center items-center text-sm">
              {cartProducts.length}
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
