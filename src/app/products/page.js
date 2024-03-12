"use client"

import MenuPost from "@/components/products/MenuPost"
import MainTitle from "@/components/reutilizable/MainTitle"

export default function ProductsHomePage() {
    return (
        <section className="mt-9 mb-5">
            <MainTitle title="All the products" subtTitle="Here you can see the entire variety of products we have available." />
            <MenuPost className="shadow-green-400 bg-[#ADE1B3] hover:bg-[#2FC13E]" />
        </section>
    )
}