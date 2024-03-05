"use client";

import { CartIcon } from "../reutilizable/Icons";
import { useSession, signIn, signOut } from "next-auth/react";

export default function ListMenu() {
  const { data: session } = useSession();

  return (
    <ul className="flex gap-x-4 cursor-pointer">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/categories">Categories</a>
      </li>
      <li>
        <a href="/products">All Products</a>
      </li>
      {session ? (
        <li>
          <a onClick={() => signOut()}>Cerrar sesión</a>
        </li>
      ) : (
        <li>
          <a onClick={() => signIn("google")}>Login</a>
        </li>
      )}

      <li href="/cart">
        <a>
          <CartIcon />
        </a>
      </li>
    </ul>
  );
}
