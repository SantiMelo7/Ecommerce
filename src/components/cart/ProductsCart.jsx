import { CartContext, cartPrice } from "@/context/AppProvider";
import Image from "next/image";
import { useContext } from "react";
import { DeleteIconItem } from "../layout/IconsItem";

export default function ProductsCart() {
  const { cartProducts, removeCart } = useContext(CartContext);
  return (
    <>
      {cartProducts?.map((product, index) => (
        <div
          key={index}
          className="mt-10 flex md:flex-row sm:flex-col md:justify-start md:items-start sm:justify-center sm:items-center gap-x-6"
        >
          <Image
            src={product.images}
            width={150}
            height={200}
            className="rounded-md shadow-lg shadow-gray-400 mb-5 "
            alt="Product"
          />
          <div className="mt-6">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="mt-2 flex flex-col">
              <span className="text-xl font-extrabold text-center">
                ${cartPrice(product)}
              </span>
              <div className="flex justify-center items-center">
                <button onClick={() => removeCart(product)}>
                  <DeleteIconItem />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
