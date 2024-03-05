"use client"

//import InputProducts from "@/components/form/InputProducts"
import NavTabs from "@/components/reutilizable/NavTabs"

export default function NewProductPage() {

    //const { handleFormSubmit } = NewProduct()

    return (
        <section className="mt-10 text-gray-300 relative -top-24">
            <NavTabs admin={true} />
            <div className="max-h-min mt-10">
                {/*<InputProducts onSubmit={handleFormSubmit} />*/}
            </div>
        </section>
    )
}