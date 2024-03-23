import useUpdatedProduct from "@/hooks/useUpdatedProduct";
import AddressInput from "../form/AddressInput";
import GenericInput from "../form/GenericInput";
import ButtonPay from "../button/ButtonPay";
import { useSession } from "next-auth/react";

export default function FormCart({ onSubmit, profile }) {
  const { data: session } = useSession();
  const { updatedProduct, handleUpdate } = useUpdatedProduct(profile);
  return (
    <form onSubmit={(ev) => onSubmit(ev, updatedProduct)}>
      <div className="md:grid md:grid-cols-2 mx-auto md:relative gap-x-3">
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
          className="md:w-[34vh] sm:w-[40vh]"
          label="Name of recipient"
          type="text"
          id="nameRecipient"
          value={updatedProduct?.nameRecipient || ""}
          onChange={(ev) => handleUpdate("nameRecipient", ev.target.value)}
          name="nameRecipient"
        />
      </div>
      <GenericInput
        className="md:w-[70vh] sm:w-[40vh]"
        label="Email"
        type="text"
        disabled={true}
        id="nameRecipient"
        value={session?.user?.email || ""}
        onChange={(ev) => handleUpdate("email", ev.target.value)}
        name="nameRecipient"
      />
      <AddressInput
        address={{
          phone: updatedProduct?.phone,
          postalCode: updatedProduct?.postalCode,
          city: updatedProduct?.city,
          streetAddress: updatedProduct?.streetAddress,
          country: updatedProduct?.country,
        }}
        setAddress={handleUpdate}
      />
      <div className="flex justify-center items-center">
        <ButtonPay />
      </div>
    </form>
  );
}
