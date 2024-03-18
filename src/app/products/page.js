"use client"

import MainTitle from "@/components/layout/MainTitle"
import MenuPost from "@/components/products/MenuPost"
import { configAll } from "@/util/constants"

export default function ProductsHomePage() {
    return (
        <section className="mb-5">
            <MainTitle title="All the products" subtTitle="Here you can see the entire variety of products we have available." />
            <MenuPost config={configAll} />
        </section>
    )
}