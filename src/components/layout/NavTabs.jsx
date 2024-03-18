"use client";

import { ROUTES } from "@/util/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavTabs({ isAdmin }) {
  const path = usePathname();
  return (
    <div className="md:flex md:flex-row sm:grid sm:grid-cols-2 md:max-w-screen-2xl sm:max-w-screen-sm sm:text-center gap-5 mx-auto text-white justify-center css">
      <>
        <Link
          className={path.includes("/profile") ? "active" : ""}
          href={ROUTES.profile}
        >
          Profile
        </Link>
        {isAdmin ? (
          <>
            <Link
              className={path.includes("/categories-items") ? "active" : ""}
              href={ROUTES.categoriesItem}
            >
              Categories
            </Link>
            <Link
              className={path.includes("/products-items") ? "active" : ""}
              href={ROUTES.productsItems}
            >
              Products
            </Link>
            <Link
              className={path.includes("/users") ? "active" : ""}
              href={ROUTES.users}
            >
              Users-Admin
            </Link>
          </>
        ) : null}
      </>
    </div>
  );
}
