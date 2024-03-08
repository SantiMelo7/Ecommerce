import { CartContext, cartPrice } from "@/context/AppProvider";
import Image from "next/image";
import { useContext } from "react";
import { DeleteIcon } from "../layout/Icons";

export default function ProductsCart() {
  const { cartProducts, removeCart } = useContext(CartContext);
  return (
    <ul>
      {cartProducts?.map((product, index) => (
        <>
          <div
            key={index}
            className="mt-20 flex flex-row md:justify-start sm:justify-center gap-x-4"
          >
            <Image
              src={product.images}
              width={100}
              height={100}
              alt="Product"
            />
            <h1 className="text-xl font-bold">{product.name}</h1>
            <span className="text-lg font-extrabold">
              ${cartPrice(product)}
            </span>
            <button onClick={() => removeCart(product)}>
              <DeleteIcon />
            </button>
          </div>
          <div className="flex border-[1px] border-gray-400 w-[50%]" />
        </>
      ))}
    </ul>
  );
}
