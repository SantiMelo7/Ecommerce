import { CartContext } from "@/context/AppProvider";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useProfile } from "./useProfile";

export function useCart() {
    const { cartProducts } = useContext(CartContext);
    const { user } = useProfile()
    const [error, setError] = useState(null)
    const router = useRouter()
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
    return { handleSubmitNewOrders, error, user }
}