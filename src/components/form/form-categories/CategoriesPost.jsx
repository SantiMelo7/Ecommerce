import useCategoriesRequest from "@/hooks/useCategoriesRequest";

export default function CategoriesPost() {
  const { categories, setCategoriesName, setEdited, handleDelete } =
    useCategoriesRequest();

  return (
    <div className="mt-7">
      {categories?.length > 0 &&
        categories.map((text, index) => (
          <div key={index} className="flex items-center mb-4 bg-blue-300">
            <div className="grow rounded-md">
              <h2 className="text-gray-800 text-xl font-bold mb-3 pl-3 pt-3">
                {text.name}
              </h2>
            </div>
            <div className="flex gap-8 justify-center items-center">
              {/*<button
                className="w-8 h-11"
                onClick={() => {
                  setEdited(text), setCategoriesName(text.name);
                }}
              >
                {" "}
                <ModeEditForwardIcon className="text-gray-100"></ModeEditForwardIcon>
              </button>
              <button className="pr-4" onClick={() => handleDelete(text._id)}>
                <DeleteForwardIcon className="text-red-700"></DeleteForwardIcon>
            </button>*/}
            </div>
          </div>
        ))}
    </div>
  );
}
