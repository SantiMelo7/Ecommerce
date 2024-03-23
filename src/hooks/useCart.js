import { CartContext } from "@/context/AppProvider";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useProfile } from "./useProfile";

export function useCart() {
    const { cartProducts } = useContext(CartContext);
    const { user } = useProfile()
    const [error, setError] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false);
    const [orderItems, setOrderItems] = useState([])
    const router = useRouter()
    useEffect(() => {
        fetch("/api/profile").then((response) => {
            response.json().then((data) => {
                setIsAdmin(data);
            });
        });
    }, []);
    useEffect(() => {
        fetch("/api/checkout").then(response => {
            response.json().then(data => {
                setOrderItems(data)
            })
        })
    }, [])
    async function handleSubmitNewOrders(ev, orderUser) {
        ev.preventDefault();
        try {
            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cartProducts, orderUser }),
            });
            setError(false)
            if (response.ok) {
                window.localStorage.clear("cart")
                router.push("/orders")
            }
        } catch (error) {
            setError(true)
            router.push("/cart")
        }
    }
    return { handleSubmitNewOrders, error, user, isAdmin, orderItems }
}