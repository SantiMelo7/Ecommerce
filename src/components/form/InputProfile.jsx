import useUpdatedProduct from "@/hooks/useUpdatedProduct";
import { useSession } from "next-auth/react";
import ButtonCreate from "../button/ButtonCreate";
import GenericInput from "./GenericInput";

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
        <GenericInput
          label="phone"
          value={updatedProduct?.phone}
          className="md:w-[70vh] sm:w-[40vh]"
          onChange={(ev) => handleUpdate("phone", ev.target.value)}
        />
        <div className="md:grid md:grid-cols-2 mx-auto md:relative left-2 gap-x-3">
          <GenericInput
            label="Postal Code"
            className="md:w-[35vh] sm:w-[40vh]"
            value={updatedProduct?.postalCode}
            onChange={(ev) => handleUpdate("postalCode", ev.target.value)}
          />
          <GenericInput
            label="City"
            className="md:w-[34vh] sm:w-[40vh]"
            value={updatedProduct?.city}
            onChange={(ev) => handleUpdate("city", ev.target.value)}
          />
        </div>
        <div className="md:grid md:grid-cols-2 mx-auto md:relative left-2 gap-x-3">
          <GenericInput
            label="Street Address"
            value={updatedProduct?.streetAddress}
            className="md:w-[35vh] sm:w-[40vh]"
            onChange={(ev) => handleUpdate("streetAddress", ev.target.value)}
          />
          <GenericInput
            label="Country"
            value={updatedProduct?.country}
            className="md:w-[34vh] sm:w-[40vh]"
            onChange={(ev) => handleUpdate("country", ev.target.value)}
          />
        </div>
        {updatedProduct?.admin ? (
          <GenericInput
            type="checkbox"
            id="admin"
            label="Admin"
            checked={updatedProduct?.admin}
            value={"1"}
            onChange={(ev) => handleUpdate("admin", ev.target.value)}
          />
        ) : null}
        <ButtonCreate className="bg-orange-400" />
      </form>
    </>
  );
}
