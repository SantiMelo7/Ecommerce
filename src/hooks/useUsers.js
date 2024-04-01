import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useUsers() {
    const { id } = useParams()
    const [userProfile, setuserProfile] = useState(null)
    const [redirectSubmit, setRedirectSubmit] = useState(false)
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("/api/users").then(response => {
            response.json().then(items => {
                const item = items.find((user) => user._id === id)
                setuserProfile(item)
            })
        })
    }, [])

    async function handleSubmitEdit(ev, data) {
        ev.preventDefault()
        setRedirectSubmit(false)
        data = { ...data, _id: id }
        const response = await fetch("/api/profile", {
            method: "PUT", headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        setRedirectSubmit(true)
    }

    async function handleDelete() {
        const response = await fetch("/api/products?_id=" + id, {
            method: "DELETE"
        })
        setRedirectSubmit(true)
    }
    if (redirectSubmit) {
        return redirect("/users")
    }
    return { userProfile, handleDelete, handleSubmitEdit, user }
}