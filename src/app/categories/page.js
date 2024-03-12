"use client"

import MenuItemProps from "../../components/products/MenuItemProps"
import MainTitle from "../../components/reutilizable/MainTitle"
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
                    {products.filter(item => item.category === text._id).map(item => (
                        <div key={text._id}>
                            <MenuItemProps {...item} />
                        </div>

                    ))}
                </div>
            ))}
        </>
    )
}