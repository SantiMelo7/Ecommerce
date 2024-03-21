"use client"

import MenuItemProps from "../../components/products/MenuItemProps"
import MainTitle from "../../components/layout/MainTitle"
import useCategoriesRequest from "../../hooks/useCategoriesRequest"
import { useProducts } from "../../hooks/useProducts"
import { configAll } from "@/util/constants"
import LinkProducts from "@/components/products/LinksProducts"

export default function CategoriesHomePage() {
    const { products } = useProducts()
    const { categories } = useCategoriesRequest()

    return (
        <>
            <div className="relative">
                <MainTitle title="All the products" subtTitle="Here you will find the full variety of products we have in more detail." />
            </div>
            <LinkProducts href="/" text="Volver a la página principal" />
            {categories.length > 0 && categories.map((text) => (
                <div key={text._id}>
                    <h1 className="title-categories">{text.name}</h1>
                    <section className="grid xl:grid-cols-4 md:grid-cols-2 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 md:max-w-screen-2xl md:mt-10 sm:max-w-screen-sm sm:mx-auto">
                        {products.filter(item => item.category.name === text.name).map(item => (
                            <div key={text._id}>
                                <MenuItemProps {...item} config={configAll} />
                            </div>
                        ))}
                    </section>
                </div>
            ))}
        </>
    )
}