"use client";

import { useContext } from "react";
import { CartContext } from "@/context/AppProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ListMenu() {
  const { cartProducts } = useContext(CartContext);
  return (
    <>
      <ul className="md:flex md:flex-row sm:grid sm:grid-cols-2 md:gap-x-7 md:translate-y-11 md:p-0 sm:p-3 md:gap-y-0 sm:gap-y-6">
        <li className="bg-[#FEFAE2] text-lg pt-1 md:text-start sm:text-center md:p-0 sm:p-2 md:px-10 sm:px-5 rounded-md hover:transition-all hover:scale-110 text-black border-[3px] border-yellow-800">
          <a href={"/"}>Home</a>
        </li>
        <li className="bg-[#FEFAE2] text-lg pt-1 md:text-start sm:text-center md:p-0 sm:p-2 md:px-10 sm:px-5 rounded-md hover:transition-all hover:scale-110 text-black border-[3px] border-yellow-800">
          <a href={"/categories"}>Categories</a>
        </li>
        <li className="bg-[#FEFAE2] text-lg pt-1 md:text-start sm:text-center md:p-0 sm:p-2 md:px-10 sm:px-5 rounded-md hover:transition-all hover:scale-110 text-black border-[3px] border-yellow-800">
          <a href={"/products"}>All Products</a>
        </li>
        {cartProducts.length > 0 && (
          <li className="flex gap-x-3">
            <a href={"/cart"}>
              <ShoppingCartIcon className="w-[35px] h-[35px] text-[#FEFAE2]" />
            </a>
            <div className="text-white flex justify-center items-center text-lg font-bold">
              {cartProducts.length}
            </div>
          </li>
        )}
      </ul>
    </>
  );
}
