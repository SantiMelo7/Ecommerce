"use client"

import InputAbout from "@/components/about/InputAbout"
import { UsePostAboutProducts } from "@/hooks/useAboutImagesRestaurant"

export default function NewProductPage() {

    const { handleAboutImages } = UsePostAboutProducts()

    return (
        <section className="mt-10 text-gray-300">
            <div className="max-h-min mt-10">
                <InputAbout onSubmit={handleAboutImages} />
            </div>
        </section>
    )
}