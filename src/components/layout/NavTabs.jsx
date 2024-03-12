"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavTabs() {
  const path = usePathname();
  return (
    <div className="flex gap-5 mx-auto text-white justify-center css">
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
      </>
    </div>
  );
}
