"use client"

import InputProfile from "@/components/form/InputProfile";
import NavTabs from "@/components/layout/NavTabs";
import { useUsers } from "@/hooks/useUsers";

export default function UserEditPage() {
    const { userProfile, handleSubmitEdit } = useUsers()
    return (
        <section className="mt-5">
            <NavTabs />
            <InputProfile profile={userProfile} onSubmit={handleSubmitEdit} />
        </section>
    )
}