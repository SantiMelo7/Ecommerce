import { DeleteIcon, EditIcon } from "@/components/layout/Icons";
import useCategoriesRequest from "@/hooks/useCategoriesRequest";

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
        <EditIcon />
      </button>
      <button className="pr-4" onClick={() => handleDelete(deleteName)}>
        <DeleteIcon />
      </button>
    </div>
  );
}
