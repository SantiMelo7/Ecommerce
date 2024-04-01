import { useCart } from "@/hooks/useCart";
import MainTitle from "../layout/MainTitle";
import Image from "next/image";

export default function OrderMap() {
  const { orderItems, isAdmin } = useCart();
  return (
    <>
      {orderItems.length > 0 &&
        orderItems.map((text, index) => (
          <div key={index}>
            {isAdmin ? (
              <div className={`flex flex-col shadow-lg `}>
                <Image
                  width={200}
                  height={200}
                  src={text.cartProducts.images}
                  alt="Images"
                  className="rounded-lg mx-auto mt-3"
                />
                <h1 className="mt-3 text-2xl text-center font-extrabold">
                  {text.cartProducts.name}
                </h1>
                <h4 className="mt-3 text-lg text-center font-extrabold text-violet-300">
                  {text.cartProducts.description}
                </h4>
                <div className="flex justify-center items-center bg-purple-300 w-[40%] mx-auto mt-2 mb-4 rounded-md">
                  <span className="text-xl mb-3 text-white pt-3">
                    {text.cartProducts.category}
                  </span>
                </div>
                <span className="text-xl font-extrabold text-center">
                  {text.orderUser.name}
                </span>
              </div>
            ) : (
              <MainTitle
                title="Gracias por tu compra, te damos una revision de tu pedido"
                subtTitle=""
              />
            )}
          </div>
        ))}
    </>
  );
}
