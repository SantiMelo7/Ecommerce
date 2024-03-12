"use client"

import LinkProducts from "@/components/products/LinksProducts"
import MenuPost from "@/components/products/MenuPost"
import NavTabs from "@/components/reutilizable/NavTabs"

export default function ProductsPage() {
    return (
        <section className="mt-9 mb-10">
            <NavTabs admin={true} />
            <LinkProducts href={"/products-items/new"} text="Crear Un Nuevo Producto" />
            <MenuPost className="shadow-green-400 bg-[#ADE1B3] hover:bg-[#2FC13E] rounded-md" />
        </section>
    )
}