"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavTabs() {
  const path = usePathname();
  return (
    <div className="flex gap-5 mx-auto text-white justify-center css">
      <>
        <Link
          className={path.includes("/categories") ? "active" : ""}
          href={"/categories"}
        >
          Categories
        </Link>
        <Link
          className={path.includes("/products") ? "active" : ""}
          href={"/products"}
        >
          Products
        </Link>
      </>
    </div>
  );
}
