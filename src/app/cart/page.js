"use client"

import MainTitle from "@/components/reutilizable/MainTitle";
import ProductsCart from "@/components/cart/ProductsCart";
import FormCart from "@/components/cart/FormCart";

export default function PageCart() {

    return (
        <>
            <MainTitle title="Cart" subtTitle="Here you have your added products, make your purchase" />
            <aside className="flex justify-center items-center max-w-screen-2xl mx-auto">
                <ProductsCart />
            </aside>
            <FormCart />
        </>
    );
}