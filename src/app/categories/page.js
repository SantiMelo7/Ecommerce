"use client"

import MenuItemProps from "../../components/products/MenuItemProps"
import MainTitle from "../../components/layout/MainTitle"
import useCategoriesRequest from "../../hooks/useCategoriesRequest"
import { usePostProducts } from "../../hooks/useProducts"

export default function CategoriesHomePage() {
    const { products } = usePostProducts()
    const { categories } = useCategoriesRequest()

    return (
        <>
            <div className="relative">
                <MainTitle title="All the products" subtTitle="Here you will find the full variety of products we have in more detail." />
            </div>
            {categories.length > 0 && categories.map((text) => (
                <div key={text._id}>
                    <h1 className="title-categories">{text.name}</h1>
                    <section className="grid xl:grid-cols-4 md:grid-cols-2 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 md:max-w-screen-2xl md:mt-10 sm:max-w-screen-sm sm:mx-auto">
                        {products.filter(item => item.category.name === text.name).map(item => (
                            <div key={text._id}>
                                <MenuItemProps {...item} />
                            </div>
                        ))}
                    </section>
                </div>
            ))}
        </>
    )
}