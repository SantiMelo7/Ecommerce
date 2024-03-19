"use client"

import NavTabs from "@/components/layout/NavTabs";
import UsersPost from "@/components/users/UsersPost";

export default function UsersPage() {
    return (
        <section className="mt-5">
            <NavTabs isAdmin={true} />
            <UsersPost />
        </section>
    )
}