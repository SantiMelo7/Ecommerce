"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Session() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <div className="flex flex-row md:top-44 sm:top-48 justify-end items-end gap-x-3 relative">
          <button onClick={() => signOut()}>
            <Image
              priority
              className="rounded-[50%] right-5 sm:bottom-1 relative"
              src={session?.user?.image}
              width={60}
              height={30}
              alt="Foto de perfil | Google"
            />
          </button>
          <div className="flex md:flex-col sm:flex-row gap-x-3 justify-end items-end relative bottom-3 rounded-md">
            <a
              href={"/profile"}
              className="text-2xl font-extrabold text-orange-500"
            >
              {`${session?.user?.name} - Profile`}
            </a>
          </div>
        </div>
      ) : (
        <a
          className="cursor-pointer relative md:top-40 sm:top-48 bg-orange-200 py-2 px-7 rounded-lg  text-2xl sm:text-center"
          onClick={() => {
            signIn("google");
            window.localStorage.clear("nextauth.message");
          }}
        >
          Iniciar Sesion
        </a>
      )}
    </>
  );
}
