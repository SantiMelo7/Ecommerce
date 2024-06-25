import Image from "next/image";
import ListMenu from "./ListMenu";
import Session from "./Sesion";

export default function HeroMenu() {
  return (
    <nav className="flex sm:flex-col md:flex-row md:justify-between top-0 bg-gray-800 md:h-32 sm:h-full">
      <div className="flex flex-row justify-center items-center">
        <Image
          width={120}
          height={120}
          src="/logo.webp"
          className="animate-blurred-fade-in animate-delay-100"
          alt="Logo de la tienda"
        />
        <h1 className="text-3xl font-extrabold text-orange-500 animate-flip-y animate-delay-100 z-40">
          Lorem Ipsum Tec
        </h1>
      </div>
      <div className="animate-shake animate-delay-100 mt-10">
        <ListMenu />
      </div>
      <div>
        <Session />
      </div>
    </nav>
  );
}
