import { CartContext } from "@/context/AppProvider";
import Image from "next/image";
import { useContext } from "react";
import { DeleteIconItem } from "../layout/IconsItem";

export default function ProductsCart() {
  const { cartProducts, removeCart, cartPrice } = useContext(CartContext);
  return (
    <section className="mt-10 sm:flex sm:flex-col sm:relative sm:right-5 md:grid md:grid-cols-2 gap-y-10 gap-x-6 pl-11">
      {cartProducts?.map((product, index) => (
        <div key={index}>
          <div className="flex border-b border-black md:w-96 sm:w-80">
            <Image
              src={product.images}
              width={100}
              height={100}
              className="rounded-md shadow-lg shadow-gray-400 mb-5"
              alt="Product"
            />
            <div className="flex flex-col left-3 relative mt-5">
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <span className="text-xl font-extrabold text-center">
                ${cartPrice(product)}
              </span>
              <button onClick={() => removeCart(product)}>
                <DeleteIconItem />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
