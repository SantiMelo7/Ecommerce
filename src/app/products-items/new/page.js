"use client"

import ErrorText from "@/components/layout/ErrorText"
import InputProducts from "../../../components/form/InputProducts"
import NavTabs from "../../../components/layout/NavTabs"
import { useProductRequest } from "@/hooks/useProducts"

export default function NewProductPage() {
    const { error, handleNewProduct } = useProductRequest()
    return (
        <section className="mt-5 text-gray-300 relative top-18">
            <NavTabs isAdmin={true} />
            <div className="max-h-min mt-10">
                <ErrorText error={error} />
                <InputProducts onSubmit={handleNewProduct} />
            </div>
        </section>
    )
}