"use client";

import useUpdatedProduct from "@/hooks/useUpdatedProduct";
import GenericInput from "./GenericInput";
import { useSession } from "next-auth/react";

export default function InputSubscribe({ onSubmit, profile }) {
  const session = useSession();
  const { updatedProduct, handleUpdate } = useUpdatedProduct(profile);
  return (
    <form
      className="flex md:flex-row sm:flex-col justify-center items-center gap-x-10"
      onSubmit={(ev) => onSubmit(ev, handleUpdate)}
    >
      <GenericInput
        className="w-[40vh]"
        label="Name"
        type="text"
        id="name"
        value={updatedProduct?.name || ""}
        onChange={(ev) => handleUpdate("name", ev.target.value)}
        name="name"
      />
      <GenericInput
        className="w-[40vh]"
        label="Email"
        id="email"
        name="email"
        type="email"
        value={session?.data?.user?.email || ""}
      />
      <div className="block md:mt-[52px] sm:mt-8 sm:pb-4">
        <button className="bg-red-200 text-2xl font-bold px-10 py-1 rounded-md hover:transition-all hover:scale-105 hover:bg-red-500">
          <p className="pt-1">Subscribe</p>
        </button>
      </div>
    </form>
  );
}
