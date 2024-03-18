import { useEffect } from "react"
import { useState } from "react"
import { useParams, useRouter } from "next/navigation"

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

export function useProductRequest() {

    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)
    const router = useRouter()
    const routerProduct = router.push("/products-items")

    useEffect(() => {
        fetch("/api/products").then(response => {
            response.json().then(items => {
                const item = items.find((product) => product._id === id)
                setProduct(item)
            })
        })
    }, [])

    async function handleFormSubmit(ev, data) {
        ev.preventDefault()
        try {
            const response = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            setError(false)
            routerProduct()
        } catch (error) {
            setError(error)
            router.push("/products-items/new")
        }
    }

    async function handleSubmitEdit(ev, data) {
        ev.preventDefault()
        data = { ...data, _id: id }
        try {
            const response = await fetch("/api/products", {
                method: "PUT", headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            setError(false)
            routerProduct()
        } catch (error) {
            setError(error)
        }
    }

    async function handleDelete() {
        const response = await fetch("/api/products?_id=" + id, {
            method: "DELETE"
        })
        routerProduct()
    }

    return { product, handleSubmitEdit, handleDelete, handleFormSubmit, error }
}