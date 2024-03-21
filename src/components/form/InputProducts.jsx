import useUpdatedProduct from "@/hooks/useUpdatedProduct";
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
            images: updatedProduct?.images,
          }}
          setProductItem={handleUpdate}
        />
        <div className="flex justify-center items-center relative bottom-8">
          <ButtonCreate className="bg-orange-500 mt-20" />
        </div>
      </form>
    </section>
  );
}
