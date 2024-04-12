"use client"

import MenuItemProps from "../../components/products/MenuItemProps"
import MainTitle from "../../components/layout/MainTitle"
import useCategoriesRequest from "../../hooks/useCategoriesRequest"
import { useProducts } from "../../hooks/useProducts"
import { configAll } from "@/util/constants"
import ListMenu from "@/components/layout/ListMenu"

export default function CategoriesHomePage() {
    const { products } = useProducts()
    const { categories } = useCategoriesRequest()

    return (
        <>
            <div className="relative">
                <MainTitle title="All the products" subtTitle="Here you will find the full variety of products we have in more detail." />
            </div>
            <div className="flex justify-center items-center mt-5">
                <ListMenu />
            </div>
            {categories.length > 0 && categories.map((text) => (
                <>
                    <div key={text._id}>
                        <h1 className="title-categories">{text.name}</h1>
                    </div>
                    <section className="grid xl:grid-cols-4 md:grid-cols-2 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 md:max-w-screen-2xl md:mt-10 sm:max-w-screen-sm sm:mx-auto">
                        {products.filter(item => item.category.name === text.name).map(item => (
                            <div key={text._id}>
                                <MenuItemProps className="bg-gradient-to-r from-lime-100 to-lime-200" {...item} config={configAll} />
                            </div>
                        ))}
                    </section>
                </>
            ))}
        </>
    )
}