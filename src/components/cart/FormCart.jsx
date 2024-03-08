import { useState } from "react";
import AddressForm from "../form/AddressForm";

export default function FormCart() {
  const [address, setAddress] = useState({});

  function handleChangeAddress(propName, value) {
    setAddress((prevAddress) => ({ ...prevAddress, [propName]: value }));
  }
  return (
    <form className="flex flex-col md:justify-end md:items-end mt-10">
      <h1 className="text-3xl text-center">Checkout</h1>
      <AddressForm
        setAddressChange={address}
        itemAddress={handleChangeAddress}
      />
      <div className="flex justify-center items-center mx-auto mb-3">
        <button className="bg-red-500 text-white py-3 px-3 w-52 rounded-md text-xl">
          Pay $
        </button>
      </div>
    </form>
  );
}
