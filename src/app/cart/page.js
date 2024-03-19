"use client"

import MainTitle from "@/components/layout/MainTitle";
import ProductsCart from "@/components/cart/ProductsCart";
import FormCart from "@/components/cart/FormCart";
import { useProfile } from "@/hooks/useProfile";
import { useCart } from "@/hooks/useCart";

export default function PageCart() {
    const { user } = useProfile()
    const { handleSubmit } = useCart()

    return (
        <>
            <MainTitle title="Cart" subtTitle="Here you have your added products, make your purchase" />
            <aside className="md:grid md:grid-cols-2 sm:max-w-screen-2xl mx-auto">
                <ProductsCart />
                <div className="flex md:justify-end md:items-end sm:justify-center mt-4">
                    <FormCart profile={user} onSubmit={handleSubmit} />
                </div>
            </aside>
        </ >
    );
}