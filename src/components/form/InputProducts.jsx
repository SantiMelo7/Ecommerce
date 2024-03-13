import useUpdatedProduct from "@/hooks/useUpdatedProduct";
import ImageCloudinary from "../cloudinary/ImageCloudinary";
import InputCaregories from "./form-categories/InputCaregories";
import SelectCategories from "./form-categories/SelectCategories";
import ButtonCreate from "../button/ButtonCreate";

export default function InputProducts({ onSubmit, product }) {
  const { updatedProduct, handleUpdate } = useUpdatedProduct(product);

  return (
    <section className="flex flex-col justify-center items-center">
      <form onSubmit={(ev) => onSubmit(ev, updatedProduct)}>
        <InputCaregories productItem={product} />
        <div className="mt-3">
          <label>Images</label>
          <ImageCloudinary
            link={updatedProduct?.images}
            setLink={(url) => handleUpdate("images", url)}
          />
        </div>
        <SelectCategories product={product} />
        <div
          className="flex justify-center items-center relative bottom-12
        "
        >
          <ButtonCreate className="bg-green-500 mt-20" />
        </div>
      </form>
    </section>
  );
}
