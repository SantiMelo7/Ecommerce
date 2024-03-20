"use client";

import { useContext } from "react";
import { ROUTES } from "@/util/constants";
import { CartContext } from "@/context/AppProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ListMenu() {
  const { cartProducts } = useContext(CartContext);
  return (
    <>
      <ul className="flex gap-x-8 text-2xl">
        <li className="menu">
          <a href={ROUTES.home}>Home</a>
        </li>
        <li className="menu">
          <a href={ROUTES.categories}>Categories</a>
        </li>
        <li className="menu">
          <a href={ROUTES.products}>All Products</a>
        </li>
        <li className="relative bottom-[2px]">
          <a href={ROUTES.cart}>
            <ShoppingCartIcon className="w-[30px] h-[30px] text-[#FEFAE2]" />
          </a>
        </li>
        <li>
          <div className="bg-[#FEFAE2] md:h-[2.4vh] sm:h-[3.2vh] w-4 rounded-[5px] right-8 relative">
            <div className="relative text-black flex justify-center items-center text-sm">
              {cartProducts.length}
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
