import { useState, useEffect } from "react"

export function UsePostAboutProducts() {

    const [aboutProducts, setAboutProducts] = useState([])

    useEffect(() => {
        handleAboutImages()
    }, [])

    async function handleAboutImages() {
        const response = await fetch("/api/aboutProducts").then(response => {
            response.json().then(images => {
                setAboutProducts(images)
            })
        })
    }
    return { aboutProducts }
}

export async function handleDelete(_id) {
    const response = await fetch("/api/aboutProducts?_id=" + _id, {
        method: "DELETE",
    })
}