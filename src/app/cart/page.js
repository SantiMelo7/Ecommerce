"use client"

import MainTitle from "@/components/layout/MainTitle";
import LinkProducts from "@/components/products/LinksProducts";
import { useCart } from "@/hooks/useCart";
import FormCart from "@/components/cart/FormCart";
import MenuPost from "@/components/products/MenuPost";
import { CartContext } from "@/context/AppProvider";
import { useContext } from "react";

export default function PageCart() {
    const { cartProducts } = useContext(CartContext);
    const { orderUser, handleSubmitNewOrders } = useCart()
    return (
        <div>
            <MainTitle title="Cart" subtTitle="Here you have your added products, make your purchase" />
            <div className="relative md:bottom-5 sm:bottom-9">
                <LinkProducts href="/" text="Volver a la página principal" />
            </div>
            {cartProducts?.map((product) => (
                <div key={product._id}>
                    <MenuPost
                        item={cartProducts}
                        config={{
                            ShowImages: true,
                            ShowName: true,
                            ShowDescription: false,
                            ShowPrice: false,
                            ShowCategory: true,
                            results: true,
                            ShowDelete: true,
                        }}
                    />
                </div>
            ))}
            <div className="flex justify-center items-center mt-10">
                <FormCart profile={orderUser} onSubmit={handleSubmitNewOrders} />
            </div>
        </div>
    );
}