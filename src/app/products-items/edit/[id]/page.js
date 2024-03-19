"use client"

import InputProducts from "@/components/form/InputProducts"
import ErrorText from "@/components/layout/ErrorText"
import NavTabs from "@/components/layout/NavTabs"
import { useProducts } from "@/hooks/useProducts"

export default function EditProductPage() {
    const { product, handleSubmitEdit, handleDelete, error } = useProducts()
    return (
        <section className="mt-5">
            <NavTabs isAdmin={true} />
            <div className="flex flex-col gap-x-5 justify-center items-center pt-8">
                <p className="uppercase font-bold text-red-700 sm:text-center sm:mb-3">If you want to delete the product already generated, press this button</p>
                <button onClick={handleDelete} className="bg-red-500 text-white text-xl px-8 py-2 font-extrabold mb-3 rounded-lg">Delete</button>
            </div>
            <div className="mt-2">
                <ErrorText error={error} />
                <InputProducts product={product} onSubmit={handleSubmitEdit} />
            </div>
        </section>
    )
}