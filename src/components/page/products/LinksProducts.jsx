import Link from "next/link";

export default function LinkProducts({ href, text }) {
  return (
    <div className="flex text-white justify-center mt-10">
      <Link
        href={href}
        className="text-xl bg-blue-900 font-bold py-3 px-12 rounded-md hover:transition-all hover:bg-blue-200 hover:text-black"
      >
        {text}
      </Link>
    </div>
  );
}
