"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Session() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <>
          <div className="flex justify-end items-end gap-x-3 right-7">
            <div className="flex gap-x-3 justify-center items-center relative right-5 bottom-3">
              <a className="cursor-pointer" onClick={() => signOut()}>
                Cerrar sesión
              </a>
              <h1>{session?.user?.name} </h1>
            </div>
            <Image
              className="rounded-[50%] right-5 relative"
              src={session?.user?.image}
              width={50}
              height={30}
              alt="Foto de perfil | Google"
            />
          </div>
        </>
      ) : (
        <>
          <a
            className="cursor-pointer relative right-8 top-1"
            onClick={() => signIn("google")}
          >
            Iniciar Sesion
          </a>
        </>
      )}
    </>
  );
}
