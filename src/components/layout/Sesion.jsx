"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Session() {
  const { data: session } = useSession();
  return (
    <>
      {session && (
        <div className="flex flex-row justify-center mb-4 -translate-x-5 md:translate-y-9 gap-x-3">
          <button onClick={() => signOut()}>
            <Image
              priority
              className="rounded-[50%]"
              src={session?.user?.image}
              width={50}
              height={50}
              alt="Foto de perfil | Google"
            />
          </button>
          <div className="flex justify-center items-center">
            <a href={"/profile"} className="text-xl font-extrabold text-white">
              {`${session?.user?.name} - Profile`}
            </a>
          </div>
        </div>
      )}
      {!session && (
        <div className="flex flex-row -translate-x-5 translate-y-9 gap-x-3">
          <a
            className="cursor-pointer bg-orange-200 py-2 px-7 rounded-lg text-2xl sm:text-center"
            onClick={() => {
              signIn("google");
              window.localStorage.clear("nextauth.message");
            }}
          >
            Iniciar Sesion
          </a>
        </div>
      )}
    </>
  );
}
