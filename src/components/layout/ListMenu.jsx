"use client";

import { useContext } from "react";
import { CartContext } from "@/context/AppProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ROUTES } from "@/util/constants";
import Link from "next/link";

export default function ListMenu() {
  const { cartProducts } = useContext(CartContext);
  return (
    <>
      <ul className="flex gap-x-4 text-xl">
        <li>
          <Link href={ROUTES.home}>Home</Link>
        </li>
        <li>
          <Link href={ROUTES.categories}>Categories</Link>
        </li>
        <li>
          <Link href={ROUTES.products}>All Products</Link>
        </li>
        <li className="relative bottom-[2px]">
          <Link href={ROUTES.cart}>
            <ShoppingCartIcon />
          </Link>
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
