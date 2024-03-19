import useCategoriesRequest from "@/hooks/useCategoriesRequest";
import { DeleteIconItem, EditIconItem } from "../layout/IconsItem";

export default function ButtonsCategories({ textName, name, deleteName }) {
  const { setCategoriesName, setEdited, handleDelete } = useCategoriesRequest();
  return (
    <div className="flex gap-8 justify-center items-center">
      <button
        className="w-8 h-11"
        onClick={() => {
          setEdited(textName), setCategoriesName(name);
        }}
      >
        <EditIconItem />
      </button>
      <button className="pr-4" onClick={() => handleDelete(deleteName)}>
        <DeleteIconItem />
      </button>
    </div>
  );
}
