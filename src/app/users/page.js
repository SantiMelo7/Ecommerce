"use client"

import { DeleteIcon, EditIcon } from "@/components/layout/Icons";
import NavTabs from "@/components/layout/NavTabs";
import { useUsers } from "@/hooks/useUsers";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UsersPage() {
    const { handleDelete } = useUsers()
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch("/api/users").then(response => {
            response.json().then(data => {
                setUser(data)
            })
        })
    }, [])

    return (
        <section className="mt-5">
            <NavTabs isAdmin={true} />
            {user.length > 0 && user.map((text) => (
                <div key={text._id} className="flex flex-col sm:gap-y-5 md:justify-between sm:justify-center items-center mt-10 text-xl p-3 bg-yellow-200 md:w-[40%] sm:w-[90%]
                    mx-auto py-3 rounded-md">
                    {text.name ? <span className="text-2xl font-bold text-green-900">{text.name}</span> : <span className="text-2xl font-bold text-red-900">No Name</span>}
                    <h1 className="text-xl font-extrabold text-blue-900">{text.email}</h1>
                    <div className="flex gap-x-4">
                        <Link href={`/users/edit/${text._id}`} className="bg-orange-500 px-8 py-1 rounded-lg text-white">
                            <EditIcon />
                        </Link>
                        <button onClick={() => handleDelete(text._id)} className="bg-red-200 px-8 py-1 rounded-lg text-white">
                            <DeleteIcon />
                        </button>
                    </div>
                </div>
            ))}
        </section>
    )
}