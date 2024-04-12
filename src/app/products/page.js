"use client"

import ListMenu from "@/components/layout/ListMenu"
import MainTitle from "@/components/layout/MainTitle"
import LinkProducts from "@/components/products/LinksProducts"
import MenuPost from "@/components/products/MenuPost"
import { configAll } from "@/util/constants"

export default function ProductsHomePage() {
    return (
        <section className="mb-5">
            <MainTitle title="All the products" subtTitle="Here you can see the entire variety of products we have available." />
            <LinkProducts href="/" text="Volver a la página principal" />
            <div className="flex justify-center items-center mt-5">
                <ListMenu />
            </div>
            <MenuPost className="bg-gradient-to-r from-sky-100 to-teal-100" config={configAll} />
        </section>
    )
}