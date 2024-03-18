"use client"

import LinkProducts from "@/components/products/LinksProducts"
import NavTabs from "@/components/layout/NavTabs"
import { usePostProducts } from "@/hooks/useProducts"
import NoResults from "@/components/layout/NoResults"
import MenuPost from "@/components/products/MenuPost"
import { ROUTES } from "@/util/constants"

export default function ProductsPage() {
    const { products } = usePostProducts()
    return (
        <section className="mt-5 mb-10">
            <NavTabs isAdmin={true} />
            <LinkProducts href={ROUTES.productsItemsNew} text="Crear Un Nuevo Producto" />
            <div className="mt-5">
                <NoResults item={products} />
            </div>
            <MenuPost />
        </section>
    )
}