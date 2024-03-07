import { useState } from "react"

export default function useImageCloudinary(setLink) {

    const [loanding, setLoanding] = useState(false)

    async function handleFile(ev) {
        const files = ev.target.files
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "products-restaurant")
        setLoanding(true)

        try {
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
        } catch (error) {
            throw new error("Fallo esto")
        }
    }
    return { loanding, handleFile }
}

/*
    const files = ev.target.files

        const data= new FormData()
        data1.append("file", files[0])
        data1.append("upload_preset", "Products App Shop Restaurant")

        const data2 = new FormData()
        data2.append("file", files[0])
        data2.append("upload_preset", "Images About Restaurant")

        setLoanding(true)

        try {

            const response1 = await fetch("https://api.cloudinary.com/v1_1/dqprmrwka/upload", {
                method: "POST", body: data1
            })
            const response2 = await fetch("https://api.cloudinary.com/v1_1/dqprmrwka/upload", {
                method: "POST", body: data1
            })

            const file1 = await response1.json()
            const file2 = await response2.json()
            setLink(file1.secure_url, file2.secure_url)

            setLoanding(false)
            // si el file pasa
            const file = file1 && file2

            if(file) {
                // retornamos ese file, que lo vuelva json, le damos el then
                // damos el link como argumento
                // si pasa damos un segundo estado donde damos que se muestre el link
                return file.json().then(link => {
                    setLink(link)
                })
            }

        } catch (error) {
            throw new error("Fallo esto")
        }

*/