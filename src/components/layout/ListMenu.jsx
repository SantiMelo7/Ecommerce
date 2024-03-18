"use client";

import { useContext } from "react";
import { CartContext } from "@/context/AppProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
        <li className="relative bottom-[2px]">
          <a href="/cart">
            <ShoppingCartIcon />
          </a>
        </li>
        <li>
          <div className="bg-blue-200 md:h-[2.4vh] sm:h-[3.2vh] w-4 rounded-[5px] right-4 relative">
            <div className="relative text-black flex justify-center items-center text-sm">
              {cartProducts.length}
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
