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
        <GenericInput
          className="md:w-[70vh] sm:w-[40vh]"
          label="Email"
          id="email"
          name="email"
          disabled={true}
          type="email"
          value={session?.data?.user?.email || ""}
        />
        <div className="md:grid md:grid-cols-2 mx-auto md:relative gap-x-3 ">
          <GenericInput
            className="md:w-[34vh] sm:w-[40vh]"
            label="Name"
            type="text"
            id="name"
            value={updatedProduct?.name || ""}
            onChange={(ev) => handleUpdate("name", ev.target.value)}
            name="name"
          />
          <GenericInput
            label="phone"
            value={updatedProduct?.phone || ""}
            className="md:w-[34vh] sm:w-[40vh]"
            onChange={(ev) => handleUpdate("phone", ev.target.value)}
            id="phone"
            name="phone"
          />
        </div>
        <div className="md:grid md:grid-cols-2 mx-auto md:relative gap-x-3">
          <GenericInput
            label="Postal Code"
            className="md:w-[34vh] sm:w-[40vh]"
            value={updatedProduct?.postalCode || ""}
            onChange={(ev) => handleUpdate("postalCode", ev.target.value)}
            id="postalCode"
            name="postalCode"
          />
          <GenericInput
            label="City"
            className="md:w-[34vh] sm:w-[40vh]"
            value={updatedProduct?.city || ""}
            onChange={(ev) => handleUpdate("city", ev.target.value)}
            id="city"
            name="city"
          />
        </div>
        <div className="md:grid md:grid-cols-2 mx-auto md:relative gap-x-3">
          <GenericInput
            label="Street Address"
            value={updatedProduct?.streetAddress || ""}
            className="md:w-[34vh] sm:w-[40vh]"
            onChange={(ev) => handleUpdate("streetAddress", ev.target.value)}
            id="streetAddress"
            name="streetAddress"
          />
          <GenericInput
            label="Country"
            id="country"
            name="country"
            value={updatedProduct?.country || ""}
            className="md:w-[34vh] sm:w-[40vh]"
            onChange={(ev) => handleUpdate("country", ev.target.value)}
          />
        </div>
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

        <ButtonCreate className="bg-orange-400" />
      </form>
    </>
  );
}
