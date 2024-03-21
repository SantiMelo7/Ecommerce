"use client";

import useCategoriesRequest from "@/hooks/useCategoriesRequest";
import GenericInput from "./GenericInput";
import ErrorText from "../layout/ErrorText";

export default function InputCategories() {
  const {
    categoriesName,
    setCategoriesName,
    handleNewCategories,
    edited,
    error,
    setCategoryName,
  } = useCategoriesRequest();

  return (
    <>
      <form className="mt-8" onSubmit={handleNewCategories}>
        <div className="flex flex-col justify-center items-center text-center">
          <ErrorText error={error} />
          <GenericInput
            label="Introduce una nueva categoria"
            value={categoriesName}
            onChange={(ev) => setCategoriesName(ev.target.value)}
            type="text"
            name="categoriesName"
            className="md:w-[60vh] sm:w-[50vh]"
          />
        </div>
        <div className="flex justify-center gap-3 mt-5">
          <button type="submit" className="btn-category">
            {edited ? "Edit" : "Create"}
          </button>
          <button
            className="btn-category"
            onClick={() => {
              setEditedCategory(null);
              setCategoryName("");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
