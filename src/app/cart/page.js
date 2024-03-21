"use client"

import MainTitle from "@/components/layout/MainTitle";
import ProductsCart from "@/components/cart/ProductsCart";
import LinkProducts from "@/components/products/LinksProducts";
import FormCart from "@/components/cart/FormCart";
import { useCart } from "@/hooks/useCart";
import { useSession } from "next-auth/react";

export default function PageCart() {
    const session = useSession();
    const { handleSubmit, address } = useCart();
    return (
        <div>
            <MainTitle title="Cart" subtTitle="Here you have your added products, make your purchase" />
            <div className="relative md:bottom-5 sm:bottom-9">
                <LinkProducts href="/" text="Volver a la página principal" />
            </div>
            <div className="flex sm:flex-col md:flex-row sm:justify-center sm:items-center md:justify-between">
                <div className="relative md:bottom-20">
                    <ProductsCart />
                </div>
                <div className="relative md:right-12 sm:mt-6">
                    <FormCart profile={address} onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
}