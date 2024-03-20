import { useState, useEffect } from "react"

export function useSubscribe() {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("/api/subscribe").then(response => {
            response.json().then(data => {
                setUser(data)
            })
        })
    }, [])

    async function handleSubmitSubscribe(ev, data) {
        ev.preventDefault()
        try {
            const response = await fetch("/api/subscribe", {
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
    return { user, handleSubmitSubscribe, error }
}