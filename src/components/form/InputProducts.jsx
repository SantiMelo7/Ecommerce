import useUpdatedProduct from "@/hooks/useUpdatedProduct";
import ImageCloudinary from "../cloudinary/ImageCloudinary";
import ButtonCreate from "../button/ButtonCreate";
import GenericInput from "./GenericInput";
import useCategoriesRequest from "@/hooks/useCategoriesRequest";

export default function InputProducts({ onSubmit, product }) {
  const { categories } = useCategoriesRequest();
  const { updatedProduct, handleUpdate } = useUpdatedProduct(product);

  return (
    <section className="flex flex-col justify-center items-center">
      <form onSubmit={(ev) => onSubmit(ev, updatedProduct)}>
        <div className="flex justify-start items-start text-start mb-3">
          <label>
            Category
            <select
              className="mt-3 bg-blue-300 text-black md:w-[70vh] sm:w-[40vh] py-2 rounded-md text-xl flex"
              value={updatedProduct?.category || ""}
              name="category"
              id="category"
              onChange={(ev) => handleUpdate("category", ev.target.value)}
            >
              {categories?.length > 0 &&
                categories?.map((text) => (
                  <option key={text._id} value={text.name || ""}>
                    {text.name}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <GenericInput
          label="Name"
          value={updatedProduct?.name || ""}
          onChange={(ev) => handleUpdate("name", ev.target.value)}
          name="name"
          id="name"
          className="md:w-[70vh] sm:w-[40vh]"
        />
        <GenericInput
          label="Description"
          value={updatedProduct?.description || ""}
          onChange={(ev) => handleUpdate("description", ev.target.value)}
          name="description"
          className="md:w-[70vh] sm:w-[40vh]"
          id="description"
        />

        <GenericInput
          label="Price"
          value={updatedProduct?.price || ""}
          onChange={(ev) => handleUpdate("price", ev.target.value)}
          name="price"
          id="price"
          className="md:w-[70vh] sm:w-[40vh]"
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
