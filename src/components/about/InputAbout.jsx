import useUpdatedProduct from "@/hooks/useUpdatedProduct";
import ButtonCreate from "../button/ButtonCreate";
import ImageCloudinary from "../cloudinary/ImageCloudinary";

export default function InputAbout({ onSubmit, product }) {
  const { updatedProduct, handleUpdate } = useUpdatedProduct(product);

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={(ev) => onSubmit(ev, updatedProduct)}
    >
      <label>Images</label>
      <ImageCloudinary
        link={updatedProduct?.images}
        setLink={(url) => handleUpdate("images", url)}
      ></ImageCloudinary>
      <ButtonCreate className="bg-green-500"></ButtonCreate>
    </form>
  );
}
