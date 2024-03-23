import useUpdatedProduct from "@/hooks/useUpdatedProduct";
import ButtonCreate from "../button/ButtonCreate";
import AddressInput from "./AddressInput";
import { useSession } from "next-auth/react";
import GenericInput from "./GenericInput";

export default function InputProfile({ onSubmit, profile }) {
  const session = useSession();
  const { updatedProduct, handleUpdate } = useUpdatedProduct(profile);
  const updateAddress = {
    phone: updatedProduct?.phone,
    postalCode: updatedProduct?.postalCode,
    city: updatedProduct?.city,
    streetAddress: updatedProduct?.streetAddress,
    country: updatedProduct?.country,
  };
  return (
    <>
      <form
        className="flex flex-col justify-center items-center max-w-screen-2xl mx-auto"
        onSubmit={(ev) => onSubmit(ev, updatedProduct)}
      >
        <div className="md:grid md:grid-cols-2 mx-auto md:relative gap-x-3">
          <GenericInput
            className="md:w-[34vh] sm:w-[40vh]"
            label="Email"
            id="email"
            name="email"
            disabled={true}
            type="email"
            value={session?.data?.user?.email || ""}
          />
          <GenericInput
            className="md:w-[34vh] sm:w-[40vh]"
            label="Name"
            type="text"
            id="name"
            value={updatedProduct?.name || ""}
            onChange={(ev) => handleUpdate("name", ev.target.value)}
            name="name"
          />
        </div>
        <AddressInput address={updateAddress} setAddress={handleUpdate} />
        {updatedProduct?.admin ? (
          <label>
            Admin{" "}
            <input
              type="checkbox"
              id="admin"
              checked={updatedProduct?.admin || ""}
              value={"1"}
              onChange={(ev) => handleUpdate("admin", ev.target.value)}
            />
          </label>
        ) : null}

        <ButtonCreate className="bg-orange-400" />
      </form>
    </>
  );
}
