import { useContext, useState } from "react";
import AddressForm from "../form/AddressForm";
import { CartContext } from "@/context/AppProvider";
import ButtonPay from "./ButtonPay";

export default function FormCart() {
  const [address, setAddress] = useState({});

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

  function handleChangeAddress(propName, value) {
    setAddress((prevAddress) => ({ ...prevAddress, [propName]: value }));
  }
  return (
    <form
      className="flex flex-col md:justify-center md:items-center mt-10 md:right-10 md:relative sm:max-w-screen-md"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl text-center">Checkout</h1>
      <AddressForm itemAddress={handleChangeAddress} setAddressProp={address} />
      <ButtonPay />
    </form>
  );
}
