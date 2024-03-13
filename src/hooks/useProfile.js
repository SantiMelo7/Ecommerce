import { useState, useEffect } from "react"

export function useProfile() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch("/api/profile").then(response => {
            response.json().then(data => {
                setUser(data)
            })
        })
    }, [])

    async function handleSubmitProfile(ev, data) {
        ev.preventDefault()
        const response = await fetch("/api/profile", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        if (response.ok) {
            window.location.reload()
        }
    }
    return { user, handleSubmitProfile }
}