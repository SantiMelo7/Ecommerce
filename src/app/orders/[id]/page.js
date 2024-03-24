"use client"

import FormCart from "@/components/cart/FormCart";
import MainTitle from "@/components/layout/MainTitle";
import NavTabs from "@/components/layout/NavTabs";
import MenuItemProps from "@/components/products/MenuItemProps";
import { useOrders } from "@/hooks/useCart";

export default function OrdersPage() {
    const { order } = useOrders()
    return (
        <div className="mt-5">
            <NavTabs />
            <MainTitle
                title="Thank you for your purchase, we will review your order"
                subtTitle="Your order will be at the door of your house as soon as possible."
            />
            <section className="grid md:grid-cols-2 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 w-full h-full md:max-w-screen-xl md:mt-10 sm:max-w-screen-sm sm:mx-auto rounded-md">
                {order?.cartProducts?.map((orderCartProducts) => (
                    <div key={orderCartProducts._id}>
                        <MenuItemProps config={{
                            ShowImages: true,
                            ShowName: true,
                            ShowDescription: true,
                            ShowPrice: false,
                            ShowCategory: true,
                            results: true,
                            ShowDelete: false,
                            ShowPriceTotal: true
                        }} {...orderCartProducts} />

                    </div>
                ))}
            </section>
            {order && order.orderUser && (
                <div className="flex justify-center items-center mt-6">
                    <FormCart disabled={true} config={{ ShowButton: false }} profile={order.orderUser} />
                </div>
            )}
        </div >
    )
}
