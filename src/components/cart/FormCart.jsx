import { useContext } from "react";
import { CartContext } from "@/context/AppProvider";
import ButtonPay from "../button/ButtonPay";
import AddressForm from "../form/AddressForm";

export default function FormCart() {
  const { cartProducts } = useContext(CartContext);

  async function handleSubmit(ev) {
    ev.preventDefault();
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        address,
        cartProducts,
      }),
    });
    window.location = await response.json();
  }

  return (
    <form
      className="flex flex-col md:justify-center md:items-center mt-10 md:right-10 md:relative sm:max-w-screen-md"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl text-center">Checkout</h1>
      <AddressForm />
      <ButtonPay />
    </form>
  );
}
