"use client"

import { CartContext } from "@/context/AppProvider";
import { useContext } from "react";
// hook del cart del context
export function useCart() {
    // recojemos el cart del context
    const cart = useContext(CartContext)
    // si el cart es undefines, se significa que no esta siendo ejecutado el provider
    if (cart === undefined) {
        throw new Error("Estas utilizando un hook en un stio que no se puede, porque no esta envuelta en un provider")
    }
    // lo retornamos
    return cart
}