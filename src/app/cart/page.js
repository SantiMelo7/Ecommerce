"use client"

import MainTitle from "@/components/layout/MainTitle";
import ProductsCart from "@/components/cart/ProductsCart";
import LinkProducts from "@/components/products/LinksProducts";
import FormCart from "@/components/cart/FormCart";
import { useCart } from "@/hooks/useCart";
import { useProfile } from "@/hooks/useProfile";

export default function PageCart() {
    const { user } = useProfile()
    const { handleSubmit } = useCart();
    return (
        <div>
            <MainTitle title="Cart" subtTitle="Here you have your added products, make your purchase" />
            <div className="relative md:bottom-5 sm:bottom-9">
                <LinkProducts href="/" text="Volver a la página principal" />
            </div>
            <div className="flex sm:flex-col md:flex-row sm:justify-center sm:items-center md:justify-between">
                <div className="relative md:bottom-40">
                    <ProductsCart />
                </div>
                <div className="relative md:right-12 sm:mt-6">
                    <FormCart profile={user} onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
}