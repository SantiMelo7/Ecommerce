"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Session() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <>
          <div className="flex sm:pl-10 md:flex-row sm:flex-col md:justify-end md:items-end sm:justify-center sm:items-center sm:mt-5 gap-x-3 md:right-7">
            <div className="flex gap-x-3 justify-center items-center relative right-5 bottom-6">
              <a className="cursor-pointer" onClick={() => signOut()}>
                Cerrar sesión
              </a>
              <h1>{session?.user?.name} </h1>
            </div>
            <Image
              className="rounded-[50%] right-5 md:bottom-4 sm:bottom-1 relative"
              src={session?.user?.image}
              width={40}
              height={30}
              alt="Foto de perfil | Google"
            />
          </div>
        </>
      ) : (
        <>
          <a
            className="cursor-pointer md:relative top-2 md:right-10 sm:text-center"
            onClick={() => signIn("google")}
          >
            Iniciar Sesion
          </a>
        </>
      )}
    </>
  );
}
