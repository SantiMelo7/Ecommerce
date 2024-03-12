import useUpdatedProduct from "@/hooks/useUpdatedProduct";
import ImageCloudinary from "../cloudinary/ImageCloudinary";
import ButtonCreate from "../button/ButtonCreate";
import SelectCategories from "./form-categories/SelectCategories";
import InputCaregories from "./form-categories/InputCaregories";

export default function InputProducts({ onSubmit, product }) {
  const { updatedProduct, handleUpdate } = useUpdatedProduct(product);

  return (
    <section className="flex flex-col justify-center items-center">
      <form
        className="lg:grid grid-cols-2 gap-x-10"
        onSubmit={(ev) => onSubmit(ev, updatedProduct)}
      >
        <InputCaregories productItem={product} />
        <div className="mt-3">
          <label>Images</label>
          <ImageCloudinary
            link={updatedProduct?.images}
            setLink={(url) => handleUpdate("images", url)}
          />
        </div>
      </form>
      <SelectCategories product={product} />
      <ButtonCreate className="bg-green-500 mt-20" />
    </section>
  );
}
