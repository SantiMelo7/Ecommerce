import { useEffect } from "react"
import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ROUTES } from "@/util/constants"

export function useProducts() {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)
    const router = useRouter()
    useEffect(() => {
        fetch("/api/products").then(response => {
            response.json().then(products => {
                setProducts(products)
            })
        })
    }, [])
    async function handleSubmitNewProduct(ev, data) {
        ev.preventDefault()
        const response = await fetch("/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        setError(false)
        if (response.ok) {
            router.push(ROUTES.productsItems)
        } else {
            setError(true)
            router.push(ROUTES.productsItemsNew)
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
                router.push(ROUTES.productsItems)
            }
        } catch (error) {
            console.log(error)
            setError(true)
            router.push(`${ROUTES.productsItemsEdit}/api/products?_id`)
        }
    }

    async function handleDelete() {
        try {
            const response = await fetch("/api/products?_id=" + id, {
                method: "DELETE"
            })
            setError(false)
            if (response.ok) {
                router.push(ROUTES.productsItems)
            }
        } catch (error) {
            console.log(error)
            setError(true)
            router.push(`${ROUTES.productsItemsEdit}/api/products?_id`)
        }
    }
    return { products, product, error, handleSubmitNewProduct, handleSubmitEdit, handleDelete }
}