import useUpdatedProduct from "@/hooks/useUpdatedProduct";
import ButtonPay from "../button/ButtonPay";
import GenericInput from "../form/GenericInput";

export default function FormCart({ onSubmit, profile }) {
  const { updatedProduct } = useUpdatedProduct(profile);
  return (
    <form
      className="flex flex-col md:justify-center md:items-center mt-10 md:right-10 md:relative sm:max-w-screen-md"
      onSubmit={(ev) => onSubmit(ev, updatedProduct)}
    >
      <h1 className="text-3xl text-center">Checkout</h1>
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
      <ButtonPay />
    </form>
  );
}
