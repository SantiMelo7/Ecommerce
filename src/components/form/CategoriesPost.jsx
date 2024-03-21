"use client";

import useCategoriesRequest from "@/hooks/useCategoriesRequest";
import NoResults from "@/components/layout/NoResults";
import ButtonsCategories from "../button/ButtonsCategories";

export default function CategoriesPost() {
  const { categories } = useCategoriesRequest();

  return (
    <section className="mt-7 grid md:grid-cols-2 gap-x-5 hover:transition">
      <NoResults item={categories} />
      {categories?.length > 0 &&
        categories?.map((text) => (
          <div key={text._id} className="flex flex-col">
            <div className="flex flex-col items-center mb-4 bg-orange-300 w-[30vh] mx-auto hover:scale-105 rounded-md">
              <div className="grow rounded-md">
                <h2 className="text-gray-800 text-xl font-bold mb-3 pl-3 pt-3">
                  {text.name}
                </h2>
              </div>
            </div>
            <ButtonsCategories
              edited={text}
              name={text.name}
              deleteName={text._id}
            />
          </div>
        ))}
    </section>
  );
}
