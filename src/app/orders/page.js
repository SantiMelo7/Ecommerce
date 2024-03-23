"use client"

import NavTabs from "@/components/layout/NavTabs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function OrdersPage() {
    const [order, setOrder] = useState([])
    const { id } = useParams()
    useEffect(() => {
        if (id) {
            fetch("/api/orders?_id=" + id).then(response => {
                response.json().then(data => {
                    setOrder(data)
                })
            })
        }
    }, [])
    return (
        <div className="mt-5">
            <NavTabs />
            <section className="grid md:grid-cols-4 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 w-full h-full md:max-w-screen-2xl md:mt-10 sm:max-w-screen-sm sm:mx-auto rounded-md">
                <p>{JSON.stringify({ order })}</p>
                {order.map((text, index) => {
                    return (
                        <div key={index}>
                            <div className={`flex flex-col shadow-lg`}>
                                <img
                                    width={200}
                                    height={200}
                                    src={text.images}
                                    alt="Images"
                                    className="rounded-lg mx-auto mt-3"
                                />
                                <h1 className="mt-3 text-2xl text-center font-extrabold">
                                    {text.name}
                                </h1>
                                <h4 className="mt-3 text-lg text-center font-extrabold text-violet-300">
                                    {text.description}
                                </h4>
                                <div className="flex justify-center items-center bg-purple-300 w-[40%] mx-auto mt-2 mb-4 rounded-md">
                                    <span className="text-xl mb-3 text-white pt-3">
                                        {text.category}
                                    </span>
                                </div>
                                <span className="text-xl font-extrabold text-center">
                                    {text.orderUser.name}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    )
}

/**
  <MainTitle
                                    title="Gracias por tu compra, te damos una revision de tu pedido"
                                    subtTitle=""
                                />
 */