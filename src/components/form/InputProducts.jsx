import useUpdatedProduct from "@/hooks/useUpdatedProduct";
import ImageCloudinary from "../cloudinary/ImageCloudinary";
import ButtonCreate from "../button/ButtonCreate";
import InputProductsPost from "./InputProductsPost";

export default function InputProducts({ onSubmit, product }) {
  const { updatedProduct, handleUpdate } = useUpdatedProduct(product);
  return (
    <section className="flex flex-col justify-center items-center">
      <form onSubmit={(ev) => onSubmit(ev, updatedProduct)}>
        <InputProductsPost
          productItem={{
            name: updatedProduct?.name,
            description: updatedProduct?.description,
            price: updatedProduct?.price,
            category: updatedProduct?.category,
          }}
          setProductItem={handleUpdate}
        />
        <div className="mt-3">
          <label>
            Images
            <ImageCloudinary
              link={updatedProduct?.images || ""}
              setLink={(url) => handleUpdate("images", url)}
            />
          </label>
        </div>
        <div className="flex justify-center items-center relative bottom-8">
          <ButtonCreate className="bg-orange-500 mt-20" />
        </div>
      </form>
    </section>
  );
}
