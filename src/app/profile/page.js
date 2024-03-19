"use client"

import InputProfile from "@/components/form/InputProfile";
import ErrorText from "@/components/layout/ErrorText";
import NavTabs from "@/components/layout/NavTabs";
import { useProfile } from "@/hooks/useProfile";

export default function ProfilePage() {
    const { user, handleSubmitProfile, error } = useProfile()
    return (
        <div className="mt-5">
            <NavTabs isAdmin={true} />
            <ErrorText error={error} />
            <div className="mt-10">
                <InputProfile profile={user} onSubmit={handleSubmitProfile} />
            </div>
        </div>
    )
}