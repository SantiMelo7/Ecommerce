import { useState } from "react"

export default function useImageCloudinary(setLink) {

    const [loanding, setLoanding] = useState(false)

    async function handleFile(ev) {
        const files = ev.target.files
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "images")
        setLoanding(true)
        const response = await fetch("https://api.cloudinary.com/v1_1/dqprmrwka/image/upload", {
            method: "POST", body: data
        })
        const file = await response.json()
        setLink(file.secure_url)
        console.log(file.secure_url)
        setLoanding(false)
        // si el file pasa
        if (file.ok) {
            // retornamos ese file, que lo vuelva json, le damos el then
            // damos el link como argumento
            // si pasa damos un segundo estado donde damos que se muestre el link
            return file.json().then(link => {
                setLink(link)
            })
        }
    }
    return { loanding, handleFile }
}