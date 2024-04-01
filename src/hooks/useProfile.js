import { useState, useEffect } from "react"

export function useProfile() {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        handleProfileContent()
    }, [])

    async function handleProfileContent() {
        fetch("/api/profile").then(response => {
            response.json().then(data => {
                setUser(data)
            })
        })
    }

    async function handleSubmitProfile(ev, data) {
        ev.preventDefault()
        try {
            const response = await fetch("/api/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            setError(false)
            if (response.ok) {
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
            window.location.reload()
            setError(true)
        }
    }
    return { user, handleSubmitProfile, error }
}