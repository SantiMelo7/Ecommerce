"use client";

import { DeleteIcon, EditIcon } from "../../layout/Icons";
import useCategoriesRequest from "@/hooks/useCategoriesRequest";

export default function CategoriesPost() {
  const { categories, setCategoriesName, setEdited, handleDelete } =
    useCategoriesRequest();

  return (
    <section className="mt-7 grid grid-cols-3 gap-x-5 hover:transition">
      {categories?.length > 0 &&
        categories.map((text) => (
          <>
            <div
              key={text._id}
              className="flex flex-col items-center mb-4 bg-orange-300  hover:scale-105 rounded-md"
            >
              <div className="grow rounded-md">
                <h2 className="text-gray-800 text-xl font-bold mb-3 pl-3 pt-3">
                  {text.name}
                </h2>
              </div>
              <div className="flex gap-8 justify-center items-center">
                <button
                  className="w-8 h-11"
                  onClick={() => {
                    setEdited(text), setCategoriesName(text.name);
                  }}
                >
                  {" "}
                  <EditIcon />
                </button>
                <button className="pr-4" onClick={() => handleDelete(text._id)}>
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </>
        ))}
    </section>
  );
}
