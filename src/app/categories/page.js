"use client"

import MenuItemProps from "@/components/page/products/MenuItemProps"
import MainTitle from "@/components/reutilizable/MainTitle"
import useCategoriesRequest from "@/hooks/useCategoriesRequest"
import { usePostProducts } from "@/hooks/useProducts"

export default function CategoriesHomePage() {

    const { products } = usePostProducts()

    const { categories } = useCategoriesRequest()

    return (
        <>
            <div className="relative">
                <MainTitle title="All the products" subtTitle="Here you will find the full variety of products we have in more detail." />
            </div>
            {categories.length > 0 && categories.map((text, index) => (
                <>
                    <div key={index}>
                        <MainTitle title={text.name} />
                        {products.filter(prevProducts => prevProducts.categories === text._id).map((productsProps, index) => (
                            <div key={index}>
                                <MenuItemProps {...productsProps} />
                            </div>
                        ))}
                    </div>
                </>
            ))}
        </>
    )
}