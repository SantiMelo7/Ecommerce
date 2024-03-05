import useCategoriesRequest from "../../../hooks/useCategoriesRequest";
import InputCreate from "../InputCreate";
import LinkProducts from "@/components/products/LinksProducts";

export default function FormCategories() {
  const { categoriesName, setCategoriesName, handleFetchCategories, edited } =
    useCategoriesRequest();

  return (
    <form className="mt-8" onSubmit={handleFetchCategories}>
      <div className="flex flex-col justify-center items-center">
        <InputCreate
          label="Introduce una nueva categoria"
          value={categoriesName}
          onChange={(ev) => setCategoriesName(ev.target.value)}
          type="text"
          name="categoriesName"
        />
      </div>
      <div className="flex justify-center gap-3 mt-5">
        <button type="submit" className="btn-category">
          {edited ? "Edit" : "Create"}
        </button>
        <button className="btn-category">Cancel</button>
      </div>
      <div className="relative -top-5">
        <LinkProducts href={"/products"} text="Ir a los productos" />
      </div>
    </form>
  );
}
