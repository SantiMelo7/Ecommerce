"use client"

import MainTitle from "@/components/layout/MainTitle";
import ProductsCart from "@/components/cart/ProductsCart";
import { useCart } from "@/hooks/useCart";
import FormCart from "@/components/cart/FormCart";
import { useProfile } from "@/hooks/useProfile";
import { useSession } from "next-auth/react";

export default function PageCart() {
    const session = useSession()
    const { user } = useProfile()
    const { handleSubmit, address } = useCart();
    return (
        <>
            <MainTitle title="Cart" subtTitle="Here you have your added products, make your purchase" />
            <aside className="flex flex-col md:left-6 relative">
                <ProductsCart />
            </aside>
            <div className="flex justify-center items-center">
                <FormCart profile={session ? user : address} onSubmit={handleSubmit} />
            </div>
        </ >
    );
}