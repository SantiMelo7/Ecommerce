import { useEffect, useState } from "react";

export default function useCategoriesRequest() {
  const [categoriesName, setCategoriesName] = useState("");
  const [categories, setCategories] = useState([]);
  const [edited, setEdited] = useState(null);

  useEffect(() => {
    handleFetchCategories();
  }, []);

  async function handleFetchCategories() {
    const response = await fetch("/api/categories")
    const data = await response.json()
    setCategories(data)
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
    if (response.ok) {
      window.location.reload()
    }
    setCategoriesName("");
    handleFetchCategories();
    setEdited(null);
  }

  async function handleDelete(_id) {
    const response = await fetch("/api/categories?_id=" + _id, {
      method: "DELETE",
    });
    if (response.ok) {
      window.location.reload()
    }
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
