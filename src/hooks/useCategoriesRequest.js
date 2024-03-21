import { useEffect, useState } from "react";

export default function useCategoriesRequest() {
  const [categoriesName, setCategoriesName] = useState("");
  const [categories, setCategories] = useState([]);
  const [edited, setEdited] = useState(null);
  const [error, setError] = useState(null)

  useEffect(() => {
    handleFetchCategories();
  }, []);

  async function handleFetchCategories() {
    try {
      fetch("/api/categories").then((response) => {
        response.json().then((data) => {
          setCategories(data)
          setError(false)
        })
      })
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  async function handleNewCategories(ev) {
    ev.preventDefault();
    const data = { name: categoriesName };
    if (edited) {
      data._id = edited._id;
    }
    try {
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
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  async function handleDelete(_id) {
    try {
      const response = await fetch("/api/categories?_id=" + _id, {
        method: "DELETE",
      });
      setError(false)
      if (response.ok) {
        window.location.reload()
      }
      handleFetchCategories();
    } catch (error) {
      console.log(error)
      setError(true)
    }
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
    error
  };
}
