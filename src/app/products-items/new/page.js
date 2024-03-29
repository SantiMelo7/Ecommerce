"use client"

import ErrorText from "@/components/layout/ErrorText"
import InputProducts from "../../../components/form/InputProducts"
import NavTabs from "../../../components/layout/NavTabs"
import { useProducts } from "@/hooks/useProducts"

export default function NewProductPage() {
    const { error, handleSubmitNewProduct } = useProducts()

    return (
        <section className="mt-5 text-gray-300 relative top-18">
            <NavTabs />
            <div className="max-h-min mt-10">
                <ErrorText error={error} />
                <InputProducts onSubmit={handleSubmitNewProduct} />
            </div>
        </section>
    )
}