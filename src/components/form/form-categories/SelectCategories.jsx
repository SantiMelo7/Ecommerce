import useCategoriesRequest from "@/hooks/useCategoriesRequest";
import useUpdatedProduct from "@/hooks/useUpdatedProduct";

export default function SelectCategories({ product }) {
  const { categories: categoriesItem } = useCategoriesRequest();
  const { updatedProduct, handleUpdate } = useUpdatedProduct(product);
  return (
    <div className="flex flex-col justify-start items-start text-start mb-3">
      <label>Category</label>
      {/*El valor es el primer estado de las categorias, el change es, el ev, damos la funcion de la actualizacion
        damos la key, la category, y decimos que si el primer estado de las categorias, damos el metodo find, el cual
        es el metodo que busca el primer arreglo que cumpla con las condiciones, damos la funcion, damos la categoria
      del _id que sea igual al valor del target*/}
      <select
        className="mt-3 bg-blue-300 text-black w-[50vh] sm:w-[40vh] py-2 rounded-md text-xl"
        value={updatedProduct?.categories}
        onChange={(ev) =>
          handleUpdate(
            "category",
            categoriesItem.find((category) => category._id === ev.target.value)
          )
        }
        id="category"
      >
        {categoriesItem?.length > 0 &&
          categoriesItem.map((text, index) => (
            <option key={index} value={text._id} className="w-full">
              {text.name}
            </option>
          ))}
      </select>
    </div>
  );
}
