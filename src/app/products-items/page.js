"use client"

import AboutPost from "@/components/page/about/AboutPost"
import LinkProducts from "@/components/page/products/LinksProducts"
import MenuPost from "@/components/page/products/MenuPost"
import NavTabs from "@/components/reutilizable/NavTabs"

export default function ProductsPage() {
    return (
        <section className="mt-9 relative">
            <NavTabs admin={true} />
            <LinkProducts href={"/products-items/new"} text="Crear Un Nuevo Producto" />
            <MenuPost className="shadow-green-400 bg-[#ADE1B3] hover:bg-[#2FC13E]" />
            <LinkProducts href={"/about/new"} text="Añade imagenes del restaurante" />
            <AboutPost />
        </section>
    )
}