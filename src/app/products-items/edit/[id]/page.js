"use client"

import InputProducts from "@/components/form/InputProducts"
import NavTabs from "@/components/layout/NavTabs"
import { ProductRequest } from "@/hooks/useProducts"

export default function EditProductPage() {

    const { product, handleSubmitEdit, handleDelete } = ProductRequest()

    return (

        <section className="mt-5">
            <NavTabs admin={true} />
            <div className="flex md:flex-row sm:flex-col gap-x-5 justify-center items-center mt-3">
                <p className="uppercase font-bold text-red-700 sm:text-center sm:mb-3">If you want to delete the product already generated, press this button</p>
                <button onClick={handleDelete} className="bg-red-500 text-white text-xl px-8 py-2 font-extrabold mb-3 rounded-lg">Delete</button>
            </div>
            <div className="mt-5">
                <InputProducts product={product} onSubmit={handleSubmitEdit} />
            </div>
        </section>
    )
}