"use client"

import MainTitle from "@/components/layout/MainTitle";
import NavTabs from "@/components/layout/NavTabs"
import { useOrders } from "@/hooks/useCart"
import Link from "next/link";
import Image from "next/image";

export default function OrdersPageHome() {
    const { orderHome } = useOrders()
    return (
        <div className="mt-5">
            <NavTabs />
            <MainTitle title="Here you can see all your current orders"
                subtTitle="If you click on it, you can see more detail"
            />
            <section className="grid md:grid-cols-2 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 w-full h-full md:max-w-screen-xl
                md:mt-10 sm:max-w-screen-sm sm:mx-auto rounded-md">
                {orderHome?.map((order) => {
                    return (
                        <div key={order._id}>
                            <Link href={`/orders/${order._id}`}>
                                <div className={`flex flex-col shadow-lg bg-gradient-to-r
                                from-[#0f172ad9] to-[#1e293b] rounded-xl`}>
                                    <Image width={200} height={200} src={order.cartProducts[0].images}
                                        alt="Images" className="rounded-lg mx-auto mt-3"
                                    />
                                    <div className="lg:grid lg:grid-cols-2  sm:flex sm:flex-col
                                        sm:text-center text-xl mt-5 mb-5 max-w-screen-md mx-auto gap-5">
                                        <span className="font-extrabold text-red-500">Owner's name:</span>
                                        <h1 className="text-slate-200 ">{order.orderUser.name}</h1>

                                        <span className="font-extrabold text-red-500">Cell phone number:</span>
                                        <h2 className=" text-lime-200">{order.orderUser.phone}</h2>

                                        <span className="font-extrabold text-red-500">Name of recipient:</span>
                                        <h3 className="text-blue-500">{order.orderUser.nameRecipient}</h3>

                                        <span className="font-extrabold text-red-500">Cantidad:</span>
                                        <h4 className="text-amber-500">{order.cartProducts.length}</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}