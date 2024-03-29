"use client"

import MainTitle from "@/components/layout/MainTitle";
import LinkProducts from "@/components/products/LinksProducts";
import { useCart } from "@/hooks/useCart";
import FormCart from "@/components/cart/FormCart";
import { CartContext } from "@/context/AppProvider";
import { useContext } from "react";
import MenuItemProps from "@/components/products/MenuItemProps";

export default function PageCart() {
    const { cartProducts } = useContext(CartContext);
    const { orderUser, handleSubmitNewOrders } = useCart()
    return (
        <>
            <MainTitle title="Cart" subtTitle="Here you have your added products, make your purchase" />
            <div className="relative md:bottom-5 sm:bottom-9">
                <LinkProducts href="/" text="Volver a la página principal" />
            </div>
            <section className="grid md:grid-cols-2 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 w-full h-full md:max-w-screen-lg md:mt-10 sm:max-w-screen-sm sm:mx-auto rounded-md">
                {cartProducts?.map((product) => (
                    <div key={product._id}>
                        <MenuItemProps product={product}
                            config={{
                                ShowImages: true,
                                ShowName: true,
                                ShowDescription: true,
                                ShowPrice: false,
                                ShowCategory: true,
                                results: true,
                                ShowPriceTotal: true
                            }}
                            {...product}
                        />
                    </div>
                ))}
            </section>
            <div className="flex justify-center items-center mt-10">
                <FormCart config={{ ShowButton: true }} profile={orderUser} onSubmit={handleSubmitNewOrders} />
            </div>
        </ >
    );
}