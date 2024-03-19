import ButtonHero from "../button/ButtonsHero";
import TextHero from "./TextHero";
import Image from "next/image";

export default function HeroMenu() {
  return (
    <section className="relative  bg-gray-800 md:pt-1 sm:pt-10 md:h-[45vh] sm:h-[100vh]">
      <div className="xl:grid xl:grid-cols-2 flex flex-col justify-center items-center">
        <div className="sm:text-center font-semibold text-gray-300 md:top-4">
          <h1 className="text-4xl font-bold text-red-600 animate-hang animate-delay-300">
            Mackbook Pro 14
          </h1>
          <TextHero />
          <ButtonHero />
        </div>
        <div className="flex justify-center items-center mb-2">
          <Image
            width={450}
            height={100}
            src="/hero.webp"
            className="relative bottom-10 animate-spin-clockwise animation-delay-500"
            alt="Photo Header"
          />
        </div>
      </div>
    </section>
  );
}
