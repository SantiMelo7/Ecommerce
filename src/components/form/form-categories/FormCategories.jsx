"use client";

import InputCreate from "../InputCreate";
import LinkProducts from "@/components/products/LinksProducts";
import { useEffect, useState } from "react";

export function useCategoriesRequest() {
  const [categoriesName, setCategoriesName] = useState("");
  const [categories, setCategories] = useState([]);
  const [edited, setEdited] = useState(null);

  useEffect(() => {
    handleFetchCategories();
  }, []);

  async function handleFetchCategories() {
    const response = await fetch("/api/categories").then((response) => {
      response.json().then((categories) => {
        setCategories(categories);
      });
    });
  }

  async function handleNewCategories(ev) {
    ev.preventDefault();
    const data = { name: categoriesName };
    if (edited) {
      data._id = edited._id;
    }

    const response = await fetch("/api/categories", {
      method: edited ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setCategoriesName("");
    handleFetchCategories();
    setEdited(null);
  }

  async function handleDelete(_id) {
    const response = await fetch("/api/categories?_id=" + _id, {
      method: "DELETE",
    });
    handleFetchCategories();
  }

  return {
    categories,
    handleDelete,
    handleNewCategories,
    handleFetchCategories,
    categoriesName,
    setCategoriesName,
    edited,
    setEdited,
  };
}

export default function FormCategories() {
  const { categoriesName, setCategoriesName, handleFetchCategories, edited } =
    useCategoriesRequest();

  return (
    <form className="mt-8" onSubmit={handleFetchCategories}>
      <div className="flex flex-col justify-center items-center text-center">
        <InputCreate
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
      <div className="relative -top-5">
        <LinkProducts href={"/products-items"} text="Ir a los productos" />
      </div>
    </form>
  );
}
