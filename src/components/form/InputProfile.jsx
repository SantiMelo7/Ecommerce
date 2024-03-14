import useUpdatedProduct from "@/hooks/useUpdatedProduct";
import { useSession } from "next-auth/react";
import ButtonCreate from "../button/ButtonCreate";
import GenericInput from "./GenericInput";
import AddressForm from "./AddressForm";

export default function InputProfile({ onSubmit, profile }) {
  const session = useSession();
  const { updatedProduct, handleUpdate } = useUpdatedProduct(profile);
  return (
    <>
      <form
        className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto"
        onSubmit={(ev) => onSubmit(ev, updatedProduct)}
      >
        <div className="md:grid md:grid-cols-2 mx-auto md:relative left-2 gap-x-3 mt-4">
          <GenericInput
            className="md:w-[35vh] sm:w-[40vh]"
            label="Email"
            disabled={true}
            type="email"
            value={session?.data?.user?.email}
          />
          <GenericInput
            className="md:w-[33vh] sm:w-[40vh]"
            label="Name"
            type="text"
            id="name"
            value={updatedProduct?.name}
            onChange={(ev) => handleUpdate("name", ev.target.value)}
          />
        </div>
        <AddressForm profile={updatedProduct} />
        <GenericInput
          type="checkbox"
          id="admin"
          label="Admin"
          checked={updatedProduct?.admin}
          onChange={(ev) => handleUpdate("admin", ev.target.value)}
        />
        <ButtonCreate className="bg-orange-400" />
      </form>
    </>
  );
}
