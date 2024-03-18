"use client"

import ErrorText from "@/components/layout/ErrorText"
import InputProducts from "../../../components/form/InputProducts"
import NavTabs from "../../../components/layout/NavTabs"
import { useProductRequest } from "@/hooks/useProducts"

export default function NewProductPage() {

    const { error, handleFormSubmit } = useProductRequest()

    return (
        <section className="mt-10 text-gray-300 relative top-18">
            <NavTabs isAdmin={true} />
            <div className="max-h-min mt-10">
                <ErrorText error={error} />
                <InputProducts onSubmit={handleFormSubmit} />
            </div>
        </section>
    )
}