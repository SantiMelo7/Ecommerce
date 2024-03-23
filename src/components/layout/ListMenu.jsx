"use client";

import { useContext } from "react";
import { CartContext } from "@/context/AppProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ListMenu() {
  const { cartProducts } = useContext(CartContext);
  return (
    <>
      <ul className="gap-x-8 text-xl md:flex sm:grid sm:grid-cols-2 sm:text-center mt-0 relative md:left-5">
        <li className="menu">
          <a href={"/"}>Home</a>
        </li>
        <li className="menu">
          <a href={"/categories"}>Categories</a>
        </li>
        <li className="menu md:mt-0 sm:mt-2">
          <a href={"/products"}>All Products</a>
        </li>
        {cartProducts.length > 0 ? (
          <>
            <li className="md:mt-1 sm:mt-3">
              <a href={"/cart"}>
                <ShoppingCartIcon className="w-[35px] h-[35px] text-[#FEFAE2]" />
              </a>
            </li>
            <li className="flex sm:justify-end md:left-0 sm:left-[140px] sm:bottom-8 md:bottom-0  relative">
              <div className="bg-[#FEFAE2] md:h-[2.2vh] sm:h-[2.3vh] w-4 rounded-[5px] md:right-8 relative">
                <div className="relative text-black flex justify-center items-center text-sm">
                  {cartProducts.length}
                </div>
              </div>
            </li>
          </>
        ) : null}
      </ul>
    </>
  );
}
