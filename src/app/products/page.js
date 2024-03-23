"use client"

import ListMenu from "@/components/layout/ListMenu"
import MainTitle from "@/components/layout/MainTitle"
import LinkProducts from "@/components/products/LinksProducts"
import MenuPost from "@/components/products/MenuPost"
import { useProducts } from "@/hooks/useProducts"
import { configAll } from "@/util/constants"

export default function ProductsHomePage() {
    const { products } = useProducts();
    return (
        <section className="mb-5">
            <MainTitle title="All the products" subtTitle="Here you can see the entire variety of products we have available." />
            <LinkProducts href="/" text="Volver a la página principal" />
            <div className="flex justify-center items-center mt-5">
                <ListMenu />
            </div>
            <MenuPost item={products} config={configAll} />
        </section>
    )
}