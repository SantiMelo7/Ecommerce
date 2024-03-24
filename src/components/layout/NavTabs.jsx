"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavTabs() {
  const { isAdmin } = useCart();

  const path = usePathname();
  return (
    <div className="md:flex md:flex-row justify-center sm:grid sm:grid-cols-2 md:max-w-screen-2xl sm:max-w-screen-sm sm:text-center gap-5 mx-auto text-white css">
      <>
        <Link
          className={path.includes("/profile") ? "active" : ""}
          href={"/profile"}
        >
          Profile
        </Link>
        {isAdmin ? (
          <>
            <Link
              className={path.includes("/categories-items") ? "active" : ""}
              href={"/categories-items"}
            >
              Categories
            </Link>
            <Link
              className={path.includes("/products-items") ? "active" : ""}
              href={"/products-items"}
            >
              Products
            </Link>
            <Link
              className={path.includes(`/users`) ? "active" : ""}
              href={`/users`}
            >
              Users-Admin
            </Link>
          </>
        ) : null}
        <Link
          className={path.includes("/orders") ? "active" : ""}
          href={`/orders`}
        >
          Orders
        </Link>

        <Link href={"/"}>Home</Link>
      </>
    </div>
  );
}
