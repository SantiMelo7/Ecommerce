import { CartContext, cartPrice } from "@/context/AppProvider";
import Image from "next/image";
import { useContext } from "react";
import { DeleteIconItem } from "../layout/IconsItem";

export default function ProductsCart() {
  const { cartProducts, removeCart } = useContext(CartContext);
  return (
    <ul>
      {cartProducts?.map((product, index) => (
        <>
          <div
            key={index}
            className="mt-20 flex md:flex-row sm:flex-col md:justify-start sm:justify-center gap-x-4"
          >
            <Image
              src={product.images}
              width={150}
              height={200}
              className="rounded-md shadow-lg shadow-gray-400 mb-5 "
              alt="Product"
            />
            <div className="flex flex-col mt-5">
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <span className="text-xl font-extrabold">
                ${cartPrice(product)}
              </span>
              <div>
                <button onClick={() => removeCart(product)}>
                  <DeleteIconItem />
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex border-[1px] border-gray-400 w-[55%] sm:hidden" />
        </>
      ))}
    </ul>
  );
}
