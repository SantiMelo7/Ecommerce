"use client"

import MainTitle from "@/components/layout/MainTitle";
import NavTabs from "@/components/layout/NavTabs"
import MenuItemProps from "@/components/products/MenuItemProps";
import { useOrders } from "@/hooks/useCart"
import Link from "next/link";

export default function OrdersPageHome() {
    const { orderHome } = useOrders()

    return (
        <div className="mt-5">
            <NavTabs />
            <MainTitle title="Here you can see all your current orders"
                subtTitle="If you click on it, you can see more detail" />
            <section className="grid md:grid-cols-2 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 w-full h-full md:max-w-screen-xl md:mt-10 sm:max-w-screen-sm sm:mx-auto rounded-md">
                {orderHome?.map((orderProduct) => (
                    <div key={orderProduct._id}>
                        <Link href={`/orders/${orderProduct._id}`}>
                            <MenuItemProps
                                config={{
                                    ShowImages: true,
                                    ShowName: true,
                                    ShowDescription: true,
                                    ShowPrice: false,
                                    ShowPriceTotal: false,
                                    ShowCategory: false,
                                    results: true,
                                    ShowDelete: false
                                }}
                            />
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    )
}