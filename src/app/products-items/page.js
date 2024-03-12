"use client"

import LinkProducts from "@/components/products/LinksProducts"
import NavTabs from "@/components/reutilizable/NavTabs"
import { usePostProducts } from "@/hooks/useProducts"
import Image from "next/image"
import Link from "next/link"


export default function ProductsPage() {
    const { products } = usePostProducts()
    return (
        <section className="mt-9 mb-10">
            <NavTabs admin={true} />
            <LinkProducts href={"/products-items/new"} text="Crear Un Nuevo Producto" />
            {products.length > 0 && products.map((text) => (
                <div className={`flex flex-col shadow-lg`} key={text._id}>
                    <Link href={`/products-items/edit/${text._id}`}>
                        <Image
                            width={192}
                            height={144}
                            src={text.images}
                            alt="Images"
                            className="rounded-lg mx-auto mt-3"
                        />
                        <h1 className="mt-3 text-2xl text-center font-extrabold">{text.name}</h1>
                        <span>{text.category.name}</span>
                    </Link>
                </div>

            ))
            }
        </section >
    )
}