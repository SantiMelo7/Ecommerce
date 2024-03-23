"use client"

import NavTabs from "@/components/layout/NavTabs";
import OrderMap from "@/components/products/OrderMap";
import { useCart } from "@/hooks/useCart";

export default function OrdersPage() {
    const { orderItems } = useCart()
    console.log(orderItems)
    return (
        <div className="mt-5">
            <NavTabs />
            <section className="grid md:grid-cols-4 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 w-full h-full md:max-w-screen-2xl md:mt-10 sm:max-w-screen-sm sm:mx-auto rounded-md">
                <pre>{JSON.stringify(orderItems, null, 2)}</pre>
                <OrderMap />
            </section>
        </div>
    )
}