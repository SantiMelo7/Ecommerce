"use client"

import LinkProducts from "@/components/products/LinksProducts"
import NavTabs from "@/components/layout/NavTabs"
import { usePostProducts } from "@/hooks/useProducts"
import NoResults from "@/components/layout/NoResults"
import MenuPost from "@/components/products/MenuPost"

export default function ProductsPage() {
    const { products } = usePostProducts()
    return (
        <section className="mt-5 mb-10">
            <NavTabs isAdmin={true} />
            <LinkProducts href={"/products-items/new"} text="Crear Un Nuevo Producto" />
            <div className="mt-5">
                <NoResults item={products} />
            </div>
            <MenuPost />
        </section>
    )
}