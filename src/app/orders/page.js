"use client"

import MainTitle from "@/components/layout/MainTitle";
import NavTabs from "@/components/layout/NavTabs"
import MenuItemProps from "@/components/products/MenuItemProps";
import { useOrders } from "@/hooks/useCart"
import Link from "next/link";

export default function OrdersPageHome() {
    const { orderHome } = useOrders()
    const firstProduct = orderHome && orderHome.length > 0 ? orderHome[0] : null;
    return (
        <div className="mt-5">
            <NavTabs />
            < MainTitle title="Here you can see all your current orders"
                subtTitle="If you click on it, you can see more detail" />
            <section className="grid md:grid-cols-2 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 w-full h-full md:max-w-screen-xl md:mt-10 sm:max-w-screen-sm sm:mx-auto rounded-md">
                {firstProduct && (
                    <Link href={`/orders/${firstProduct._id}`}>
                        <MenuItemProps config={{
                            ShowImages: true,
                            ShowName: true,
                            ShowDescription: true,
                            ShowPrice: false,
                            ShowPriceTotal: false,
                            ShowCategory: false,
                            results: true,
                            ShowDelete: false
                        }}
                            {...firstProduct}
                        />
                    </Link>
                )}
            </section>
        </div>
    )
}