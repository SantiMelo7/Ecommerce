"use client";

import useCategoriesRequest from "@/hooks/useCategoriesRequest";
import GenericInput from "./GenericInput";

export default function InputCategories() {
  const { categoriesName, setCategoriesName, handleNewCategories, edited } =
    useCategoriesRequest();

  return (
    <>
      <form className="mt-8" onSubmit={handleNewCategories}>
        <div className="flex flex-col justify-center items-center text-center">
          <GenericInput
            label="Introduce una nueva categoria"
            value={categoriesName}
            onChange={(ev) => setCategoriesName(ev.target.value)}
            type="text"
            name="categoriesName"
            className="formCategories"
          />
        </div>
        <div className="flex justify-center gap-3 mt-5">
          <button type="submit" className="btn-category">
            {edited ? "Edit" : "Create"}
          </button>
          <button className="btn-category">Cancel</button>
        </div>
      </form>
    </>
  );
}
