"use client"

import LinkProducts from "@/components/products/LinksProducts"
import NavTabs from "@/components/layout/NavTabs"
import MenuPost from "@/components/products/MenuPost"

export default function ProductsPage() {
    return (
        <section className="mt-5 mb-10">
            <NavTabs isAdmin={true} />
            <LinkProducts href={"products-items/new"} text="Crear Un Nuevo Producto" />
            <MenuPost config={{
                ShowImages: true,
                ShowName: true,
                ShowDescription: false,
                ShowPrice: false,
                ShowCategory: true,
                link: true,
                results: true
            }} />
        </section>
    )
}