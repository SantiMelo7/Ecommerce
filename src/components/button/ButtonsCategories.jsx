import useCategoriesRequest from "@/hooks/useCategoriesRequest";
import { DeleteIconItem, EditIconItem } from "../layout/IconsItem";

export default function ButtonsCategories({ category }) {
  const { setCategoriesName, setEdited, handleDelete } = useCategoriesRequest();
  const handleClick = () => {
    setEdited(category);
    setCategoriesName(category.name);
  };
  return (
    <div className="flex gap-8 justify-center items-center">
      <button type="button" className="w-8 h-11" onClick={handleClick}>
        <EditIconItem />
      </button>
      <button className="pr-4" onClick={() => handleDelete(category._id)}>
        <DeleteIconItem />
      </button>
    </div>
  );
}
