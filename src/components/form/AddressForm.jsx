import useUpdatedProduct from "@/hooks/useUpdatedProduct";
import GenericInput from "./GenericInput";

export default function AddressForm({ profile }) {
  const { updatedProduct, handleUpdate } = useUpdatedProduct(profile);

  return (
    <div className="flex flex-col justify-center items-center">
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
    </div>
  );
}
