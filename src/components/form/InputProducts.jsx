import useCategoriesRequest from "@/hooks/useCategoriesRequest";
import useUpdatedProduct from "@/hooks/useUpdatedProduct";
import InputCreate from "./InputCreate";
import ImageCloudinary from "../page/cloudinary/ImageCloudinary";
import ButtonCreate from "../page/button/ButtonCreate";

export default function InputProducts({ onSubmit, product }) {
  const { categories: categoriesItem } = useCategoriesRequest();

  const { updatedProduct, handleUpdate } = useUpdatedProduct(product);

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={(ev) => onSubmit(ev, updatedProduct)}
    >
      {/* El  valor es el primer estado y damos el valor */}
      {/* El onChange, damos el ev, damos la actualizacion y damos la key, que es name, y damos el valor del target del evento*/}
      <InputCreate
        label="Name"
        value={updatedProduct?.name}
        onChange={(ev) => handleUpdate("name", ev.target.value)}
        name="email"
        type="text"
      />

      <label>Images</label>
      <ImageCloudinary
        link={updatedProduct?.images}
        setLink={(url) => handleUpdate("images", url)}
      />

      <InputCreate
        label="Price"
        value={updatedProduct?.price}
        onChange={(ev) => handleUpdate("price", ev.target.value)}
        name="price"
        type="text"
      />

      <InputCreate
        label="Description"
        value={updatedProduct?.description}
        onChange={(ev) => handleUpdate("description", ev.target.value)}
        name="description"
        type="text"
      />

      <label>Category</label>
      {/*El valor es el primer estado de las categorias, el change es, el ev, damos la funcion de la actualizacion
                damos la key, la category, y decimos que si el primer estado de las categorias, damos el metodo find, el cual
                es el metodo que busca el primer arreglo que cumpla con las condiciones, damos la funcion, damos la categoria
                del _id que sea igual al valor del target*/}
      <select
        value={updatedProduct?.categories}
        onChange={(ev) =>
          handleUpdate(
            "category",
            categoriesItem.find((category) => category._id === ev.target.value)
          )
        }
      >
        {categoriesItem?.length > 0 &&
          categoriesItem.map((text, index) => (
            <option key={index} value={text._id}>
              {text.name}
            </option>
          ))}
      </select>

      <ButtonCreate className="bg-green-500" />
    </form>
  );
}
