"use client"

import FormCart from "@/components/cart/FormCart";
import MainTitle from "@/components/layout/MainTitle";
import NavTabs from "@/components/layout/NavTabs";
import { useOrders } from "@/hooks/useCart";
import Image from "next/image";

export default function OrdersPage() {
    const { order } = useOrders()
    return (
        <div className="mt-5">
            <NavTabs />
            <MainTitle
                title="Thank you for your purchase, we will review your order"
                subtTitle="Your order will be at the door of your house as soon as possible."
            />
            <section className="mt-10 flex flex-col justify-between sm:relative sm:right-5 gap-y-10 gap-x-6 pl-11">
                {order?.cartProducts?.map((product, index) => (
                    <div key={index}>
                        <div className="flex border-b border-black md:w-96 sm:w-80">
                            <Image
                                src={product.images}
                                width={100}
                                height={100}
                                className="rounded-md shadow-lg shadow-gray-400 mb-5"
                                alt="Product"
                            />
                        </div>
                    </div>
                ))}
                {order && order.orderUser && (
                    <div className="flex justify-center items-center">
                        <FormCart profile={order.orderUser} />
                    </div>
                )}
            </section>
        </div >
    )
}
