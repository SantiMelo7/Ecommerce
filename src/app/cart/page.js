"use client"

import MainTitle from "@/components/reutilizable/MainTitle";
import ProductsCart from "@/components/cart/ProductsCart";
import FormCart from "@/components/cart/FormCart";

export default function PageCart() {

    return (
        <>
            <MainTitle title="Cart" subtTitle="Here you have your added products, make your purchase" />
            <aside className="md:grid md:grid-cols-2 sm:max-w-screen-2xl mx-auto">
                <ProductsCart />
                <div className="flex md:justify-end md:items-end sm:justify-center mt-8">
                    <FormCart />
                </div>
            </aside>
        </ >
    );
}