"use client"

import InputProfile from "@/components/form/InputProfile";
import NavTabs from "@/components/layout/NavTabs";
import { useProfile } from "@/hooks/useProfile";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfilePage() {
    const session = useSession()
    const { user, handleSubmitProfile } = useProfile()

    const googleImg = session?.data?.user?.image
    return (
        <div className="mt-10">
            <NavTabs />
            <div className="flex justify-center items-center mt-10">
                <Image className="rounded-md shadow-lg shadow-gray-700" src={googleImg} width={100} height={100} alt="Photo Google" />
            </div>
            <InputProfile profile={user} onSubmit={handleSubmitProfile} />
        </div>
    )
}