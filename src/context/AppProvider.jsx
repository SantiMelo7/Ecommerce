"use client";

import { SessionProvider } from "next-auth/react";
import { createContext } from "react";
import { useCartReducer } from "../hooks/useCart";

export const CartContext = createContext();

export default function AppProvider({ session, children }) {
  const { state, addToCart, removeCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, clearCart, removeCart }}
    >
      <SessionProvider session={session}>{children}</SessionProvider>
    </CartContext.Provider>
  );
}
