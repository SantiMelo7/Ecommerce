import { useEffect } from "react"
import { useState } from "react"
import { redirect, useParams } from "next/navigation"

export function usePostProducts() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("/api/products").then(response => {
            response.json().then(products => {
                setProducts(products)
            })
        })
    }, [])
    return { products }
}

export function ProductRequest() {

    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [redirectSubmit, setRedirectSubmit] = useState(false)

    useEffect(() => {
        fetch("/api/products").then(response => {
            response.json().then(items => {
                const item = items.find((product) => product._id === id)
                setProduct(item)
            })
        })
    }, [])

    async function handleSubmitEdit(ev, data) {
        ev.preventDefault()
        setRedirectSubmit(false)
        data = { ...data, _id: id }
        const response = await fetch("/api/products", {
            method: "PUT", headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        setRedirectSubmit(true)
    }

    async function handleDelete() {
        const response = await fetch("/api/products?_id=" + id, {
            method: "DELETE"
        })
        setRedirectSubmit(true)
    }
    if (redirectSubmit) {
        return redirect("/products")

    }

    return { product, handleSubmitEdit, handleDelete }

}

export function NewProduct() {

    const [redirectOnSubmit, setRedirectOnSubmit] = useState(false)

    async function handleFormSubmit(ev, data) {
        ev.preventDefault()
        const response = await fetch("/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)

        })
        setRedirectOnSubmit(true)
    }

    if (redirectOnSubmit) {
        return redirect("/products")
    }

    return { handleFormSubmit }

}