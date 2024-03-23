import useUpdatedProduct from "@/hooks/useUpdatedProduct";
import ButtonCreate from "../button/ButtonCreate";
import AddressInput from "./AddressInput";
import InputNameAndEmail from "./InputNameAndEmail";

export default function InputProfile({ onSubmit, profile }) {
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
        <InputNameAndEmail doc={{ name: updatedProduct?.name }} />
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
