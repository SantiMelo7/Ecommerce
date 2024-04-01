import { useEffect } from "react"
import { useState } from "react"
import { useParams, useRouter } from "next/navigation"

export function useProducts() {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)
    const router = useRouter()
    useEffect(() => {
        handleProducts()
    }, [])

    async function handleProducts() {
        fetch("/api/products").then(response => {
            response.json().then(products => {
                setProducts(products)
            })
        })
    }

    async function handleSubmitNewProduct(ev, data) {
        ev.preventDefault()
        try {
            const response = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            setError(false)
            if (response.ok) {
                router.push("/products-items")
            }
        } catch (error) {
            console.log(error)
            setError(true)
            router.push("/products-items/new")
        }
    }
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
        data = { ...data, _id: id }
        try {
            const response = await fetch("/api/products", {
                method: "PUT", headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            setError(false)
            if (response.ok) {
                router.push("/products-items")
            }
        } catch (error) {
            console.log(error)
            setError(true)
            router.push("/products-items/edit")
        }
    }

    async function handleDelete() {
        try {
            const response = await fetch("/api/products?_id=" + id, {
                method: "DELETE"
            })
            setError(false)
            if (response.ok) {
                router.push("/products-items")
            }
        } catch (error) {
            console.log(error)
            setError(true)
            router.push("/products-items/edit")
        }
    }
    return { products, product, error, handleSubmitNewProduct, handleSubmitEdit, handleDelete }
}