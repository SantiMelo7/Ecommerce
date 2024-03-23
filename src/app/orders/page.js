"use client"

import NavTabs from "@/components/layout/NavTabs"
import { useOrders } from "@/hooks/useCart"
import Link from "next/link";

export default function OrdersPageHome() {
    const { orderHome } = useOrders()
    const firstProduct = orderHome && orderHome.length > 0 ? orderHome[0] : null;
    return (
        <div className="mt-5">
            <NavTabs />
            <section className="grid md:grid-cols-4 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 w-full h-full md:max-w-screen-2xl md:mt-10 sm:max-w-screen-sm sm:mx-auto rounded-md">
                {firstProduct && (
                    <Link href={`/orders/${firstProduct._id}`}>
                        <div className={`flex flex-col shadow-lg`}>
                            <img
                                width={200}
                                height={200}
                                src={firstProduct.images}
                                alt="Images"
                                className="rounded-lg mx-auto mt-3" />

                            <h1 className="mt-3 text-2xl text-center font-extrabold">{firstProduct.name}</h1>
                        </div>
                    </Link>
                )}
            </section>
        </div>
    )
}