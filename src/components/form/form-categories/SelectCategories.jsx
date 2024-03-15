import useCategoriesRequest from "@/hooks/useCategoriesRequest";
import useUpdatedProduct from "@/hooks/useUpdatedProduct";

export default function SelectCategories({ product }) {
  const { categories } = useCategoriesRequest();
  const { updatedProduct, handleUpdate } = useUpdatedProduct(product);

  return (
    <div className="flex flex-col justify-start items-start text-start">
      <label>Category</label>
      {/*El valor es el primer estado de las categorias, el change es, el ev, damos la funcion de la actualizacion
        damos la key, la category, y decimos que si el primer estado de las categorias, damos el metodo find, el cual
        es el metodo que busca el primer arreglo que cumpla con las condiciones, damos la funcion, damos la categoria
      del _id que sea igual al valor del target*/}
      <select
        className="mt-3 bg-blue-300 text-black md:w-[70vh] sm:w-[40vh] py-2 rounded-md text-xl"
        value={updatedProduct?.category}
        name="category"
        id="category"
        onChange={(ev) => handleUpdate("category", ev.target.value)}
      >
        {categories?.length > 0 &&
          categories?.map((text) => (
            <option key={text._id} value={text.name} className="w-full">
              {text.name}
            </option>
          ))}
      </select>
    </div>
  );
}
