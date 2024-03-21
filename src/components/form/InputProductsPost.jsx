import useCategoriesRequest from "@/hooks/useCategoriesRequest";
import GenericInput from "./GenericInput";
import ImageCloudinary from "../cloudinary/ImageCloudinary";

export default function InputProductsPost({ productItem, setProductItem }) {
  const { categories: categoriesName } = useCategoriesRequest();
  const { name, description, price, category, images } = productItem;
  return (
    <>
      <div className="flex justify-start items-start text-start mb-3">
        <label>
          Category
          <select
            className="md:w-[70vh] sm:w-[40vh] py-2 text-white"
            value={category || ""}
            name="category"
            id="category"
            onChange={(ev) => setProductItem("category", ev.target.value)}
          >
            {categoriesName?.length > 0 &&
              categoriesName?.map((text) => (
                <option key={text._id} value={text.name || ""}>
                  {text.name}
                </option>
              ))}
          </select>
        </label>
      </div>
      <GenericInput
        label="Name"
        value={name || ""}
        onChange={(ev) => setProductItem("name", ev.target.value)}
        name="name"
        id="name"
        className="md:w-[70vh] sm:w-[40vh]"
      />
      <GenericInput
        label="Description"
        value={description || ""}
        onChange={(ev) => setProductItem("description", ev.target.value)}
        name="description"
        className="md:w-[70vh] sm:w-[40vh]"
        id="description"
      />

      <GenericInput
        label="Price"
        value={price || ""}
        onChange={(ev) => setProductItem("price", ev.target.value)}
        name="price"
        id="price"
        className="md:w-[70vh] sm:w-[40vh]"
      />
      <div className="mt-3">
        <label>
          Images
          <ImageCloudinary
            link={images || ""}
            setLink={(url) => setProductItem("images", url)}
          />
        </label>
      </div>
    </>
  );
}
