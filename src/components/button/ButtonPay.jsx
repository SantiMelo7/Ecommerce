import { CartContext } from "@/context/AppProvider";
import { useContext } from "react";

export default function ButtonPay() {
  const { cartProducts, cartPrice } = useContext(CartContext);
  let total = 0;
  for (const p of cartProducts) {
    total += cartPrice(p);
  }
  const formattedTotal = typeof total === "number" ? total.toFixed(2) : "0.00";
  return (
    <div className="flex md:flex-row sm:flex-col justify-center items-center gap-x-10 mt-8 mx-auto mb-3">
      <button className="bg-red-500 text-white py-3 px-3 w-52 rounded-md text-xl hover:transition-all hover:scalale-100 inline-block">
        Pay ${formattedTotal}
      </button>
    </div>
  );
}
