"use client"

import MainTitle from "@/components/reutilizable/MainTitle";
import ProductsCart from "@/components/cart/ProductsCart";
import FormCart from "@/components/cart/FormCArt";

export default function PageCart() {

    return (
        <>
            <MainTitle title="Cart" subtTitle="Here you have your added products, make your purchase" />
            <aside className="md:grid md:grid-cols-2 max-w-screen-2xl mx-auto">
                <ProductsCart />
                <FormCart />
            </aside>
        </>
    );
}