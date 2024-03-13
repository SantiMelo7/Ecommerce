import useUpdatedProduct from "@/hooks/useUpdatedProduct";
import GenericInput from "./GenericInput";
import { useSession } from "next-auth/react";
import ButtonCreate from "../button/ButtonCreate";
import AddressForm from "./AddressForm";
import { useState } from "react";

export default function InputProfile({ onSubmit, profile }) {
  const [address, setAddress] = useState({});
  const [isAdmin, setIsAdmin] = useState(profile?.admin || false);
  const session = useSession();
  const { updatedProduct, handleUpdate } = useUpdatedProduct(profile);
  function handleChangeAddress(propName, value) {
    setAddress((prevAddress) => ({ ...prevAddress, [propName]: value }));
  }

  return (
    <form
      className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto"
      onSubmit={(ev) => onSubmit(ev, updatedProduct)}
    >
      <GenericInput
        className="md:w-[70vh] sm:w-[35vh]"
        label="Email"
        disabled={true}
        type="email"
        value={session?.data?.user?.email}
      />
      <GenericInput
        className="md:w-[70vh] sm:w-[35vh]"
        label="Name"
        type="text"
        value={updatedProduct?.name}
        onChange={(ev) => handleUpdate("name", ev.target.value)}
      />

      <AddressForm
        itemAddress={updatedProduct}
        setAddressProp={handleChangeAddress}
      />
      <GenericInput
        type="checkbox"
        id="admin"
        label="Admin"
        value={"1"}
        checked={isAdmin}
        onChange={(ev) => setIsAdmin(ev.target.checked)}
      />
      <ButtonCreate className="bg-orange-400" />
    </form>
  );
}
