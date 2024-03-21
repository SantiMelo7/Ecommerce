import { useSession } from "next-auth/react";
import GenericInput from "./GenericInput";

export default function InputNameAndEmail({ doc, setDoc }) {
  const { name } = doc;
  const session = useSession();
  return (
    <div className="md:grid md:grid-cols-2 mx-auto md:relative gap-x-3">
      <GenericInput
        className="md:w-[34vh] sm:w-[40vh]"
        label="Email"
        id="email"
        name="email"
        disabled={true}
        type="email"
        value={session?.data?.user?.email || ""}
      />
      <GenericInput
        className="md:w-[34vh] sm:w-[40vh]"
        label="Name"
        type="text"
        id="name"
        value={name || ""}
        onChange={(ev) => setDoc("name", ev.target.value)}
        name="name"
      />
    </div>
  );
}
