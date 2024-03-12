import useUpdatedProduct from "@/hooks/useUpdatedProduct";
import InputCreate from "../InputCreate";

export default function InputCaregories({ productItem }) {
  const { updatedProduct, handleUpdate } = useUpdatedProduct(productItem);
  return (
    <>
      <InputCreate
        label="Name"
        value={updatedProduct?.name}
        onChange={(ev) => handleUpdate("name", ev.target.value)}
        name="name"
        id="name"
        className="w-[50vh] sm:w-[40vh]"
      />
      <InputCreate
        label="Description"
        value={updatedProduct?.description}
        onChange={(ev) => handleUpdate("description", ev.target.value)}
        name="description"
        className="w-[50vh] sm:w-[40vh]"
        id="description"
      />

      <InputCreate
        label="Price"
        value={updatedProduct?.price}
        onChange={(ev) => handleUpdate("price", ev.target.value)}
        name="price"
        id="price"
        className="w-[50vh] sm:w-[40vh]"
      />
    </>
  );
}
