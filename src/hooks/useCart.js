import { CartContext } from "@/context/AppProvider";
import { useContext } from "react";

export function useCart() {
    const { cartProducts } = useContext(CartContext);
    async function handleSubmit(ev) {
        ev.preventDefault();
        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                address,
                cartProducts,
            }),
        });
        window.location = await response.json();
    }
    return { handleSubmit }
}