"use client";

import { ROUTES } from "@/util/constants";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Session() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <>
          <div className="flex sm:pl-10 md:flex-row sm:flex-col justify-center items-center sm:mt-5 gap-x-3">
            <div className="flex md:flex-col sm:flex-row gap-x-3 justify-center items-center relative right-5 bottom-[20px]">
              <a href={ROUTES.profile}>
                <h1 className="text-2xl font-extrabold text-yellow-200">
                  Profile
                </h1>
              </a>
            </div>
            <button onClick={() => signOut()}>
              <Image
                priority
                className="rounded-[50%] right-5  sm:bottom-1 relative"
                src={session?.user?.image}
                width={50}
                height={30}
                alt="Foto de perfil | Google"
              />
            </button>
          </div>
        </>
      ) : (
        <>
          <a
            className="cursor-pointer md:relative bottom-2 md:right-10 sm:text-center"
            onClick={() => signIn("google")}
          >
            Iniciar Sesion
          </a>
        </>
      )}
    </>
  );
}
