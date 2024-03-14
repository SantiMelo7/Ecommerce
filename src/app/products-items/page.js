"use client"

import LinkProducts from "@/components/products/LinksProducts"
import NavTabs from "@/components/layout/NavTabs"
import { usePostProducts } from "@/hooks/useProducts"
import Image from "next/image"
import Link from "next/link"
import NoResults from "@/components/layout/NoResults"

export default function ProductsPage() {
    const { products } = usePostProducts()
    return (
        <section className="mt-9 mb-10">
            <NavTabs isAdmin={true} />
            <LinkProducts href={"/products-items/new"} text="Crear Un Nuevo Producto" />
            <NoResults item={products} />
            <section className="grid xl:grid-cols-4 md:grid-cols-2 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 md:max-w-screen-2xl mt-10  sm:max-w-screen-sm sm:mx-auto">
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
                            <div className="flex justify-center items-center bg-purple-300 w-[40%] mx-auto mt-2 mb-4 rounded-md">
                                <span className="text-xl mb-3 text-white pt-3">{text.category.name}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
        </section>
    )
}