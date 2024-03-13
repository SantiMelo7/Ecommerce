import { CartContext, cartPrice } from "@/context/AppProvider";
import { useContext } from "react";

export default function ButtonPay() {
  const { cartProducts } = useContext(CartContext);
  let total = 0;

  for (const p of cartProducts) {
    total += cartPrice(p);
  }
  return (
    <div className="flex justify-center items-center mx-auto mb-3">
      <button className="bg-red-500 text-white py-3 px-3 w-52 rounded-md text-xl">
        Pay ${total}
      </button>
    </div>
  );
}
