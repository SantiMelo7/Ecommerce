import { CartContext } from "@/context/AppProvider";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export function useCart() {
    const { cartProducts } = useContext(CartContext);
    const [orderUser, setOrderUser] = useState(null)
    const [error, setError] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false);
    const router = useRouter()
    useEffect(() => {
        fetch("/api/profile").then((response) => {
            response.json().then((data) => {
                setIsAdmin(data);
            });
        });
    }, []);
    async function handleSubmitNewOrders(ev, orderUser) {
        ev.preventDefault();
        try {
            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userEmail, cartProducts, orderUser }),
            });
            setError(false)
            if (response.ok) {
                const data = await response.json()
                const _id = data.orderDoc._id
                window.localStorage.clear("cart")
                router.push(`/orders/${_id}`)
            }
        } catch (error) {
            setError(true)
            router.push("/cart")
        }
    }
    return { handleSubmitNewOrders, error, orderUser, isAdmin }
}

export function useOrders() {
    const [order, setOrder] = useState([])
    const [orderHome, setOrderHome] = useState([])
    const { id } = useParams()
    useEffect(() => {
        if (id) {
            fetch("/api/orders?_id=" + id).then(response => {
                response.json().then(data => {
                    setOrder(data)
                })
            })
        }
    }, [])
    useEffect(() => {
        fetch("/api/orders").then(response => {
            response.json().then(data => {
                setOrderHome(data)
            })
        })

    }, [])
    return { order, orderHome }
}