"use client"

import NavTabs from "@/components/layout/NavTabs";
import { useEffect, useState } from "react";

export default function OrdersPage() {
    const [orderItems, setOrderItems] = useState([])
    console.log(orderItems)
    useEffect(() => {
        fetch("/api/checkout").then(response => {
            response.json().then(data => {
                setOrderItems(data)
            })
        })
    }, [])
    return (
        <section className="mt-5">
            <NavTabs isAdmin={true} />
            {orderItems.length > 0 &&
                orderItems.map((text) => (
                    <div key={text._id}>
                        <p>{text.name}</p>
                    </div>
                ))}
        </section>
    )
}