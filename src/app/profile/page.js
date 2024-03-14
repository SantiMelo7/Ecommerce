"use client"

import InputProfile from "@/components/form/InputProfile";
import NavTabs from "@/components/layout/NavTabs";
import { useProfile } from "@/hooks/useProfile";

export default function ProfilePage() {
    const { user, handleSubmitProfile } = useProfile()
    return (
        <div className="mt-5">
            <NavTabs isAdmin={true} />
            <div className="mt-10">
                <InputProfile profile={user} onSubmit={handleSubmitProfile} />
            </div>
        </div>
    )
}