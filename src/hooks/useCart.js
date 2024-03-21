import { CartContext } from "@/context/AppProvider";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export function useCart() {
    const { cartProducts } = useContext(CartContext);
    const [error, setError] = useState(null)
    const [address, setAddress] = useState({})
    const router = useRouter()
    async function handleSubmit(ev) {
        ev.preventDefault();
        try {
            const response = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    cartProducts, address
                }),
            });
            setError(false)
            if (response.ok) {
                router.push("/orders")
            }
        } catch (error) {
            setError(true)
            router.push("/cart")
        }
    }
    return { handleSubmit, error, address }
}