import useUpdatedProduct from "@/hooks/useUpdatedProduct";
import GenericInput from "./GenericInput";

export default function InputProductsPost({ productItem }) {
  const { updatedProduct, handleUpdate } = useUpdatedProduct(productItem);
  return (
    <>
      <GenericInput
        label="Name"
        value={updatedProduct?.name}
        onChange={(ev) => handleUpdate("name", ev.target.value)}
        name="name"
        id="name"
        className="md:w-[70vh] sm:w-[40vh]"
      />
      <GenericInput
        label="Description"
        value={updatedProduct?.description}
        onChange={(ev) => handleUpdate("description", ev.target.value)}
        name="description"
        className="md:w-[70vh] sm:w-[40vh]"
        id="description"
      />

      <GenericInput
        label="Price"
        value={updatedProduct?.price}
        onChange={(ev) => handleUpdate("price", ev.target.value)}
        name="price"
        id="price"
        className="md:w-[70vh] sm:w-[40vh]"
      />
    </>
  );
}
