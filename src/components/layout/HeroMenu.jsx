import ButtonHero from "../button/ButtonsHero";
import TextHero from "./TextHero";

export default function HeroMenu() {
  return (
    <section className="relative  bg-gray-800 sm:pt-10 lg:h-[45vh] md:h-[65vh] sm:h-[100vh]">
      <div className="md:grid md:grid-cols-2 sm:flex sm:flex-col justify-center items-center">
        <div className="sm:text-center font-semibold text-gray-300 md:top-4">
          <h1 className="text-4xl font-bold text-red-600 animate-hang animate-delay-300">
            Mackbook Pro 14
          </h1>
          <TextHero />
          <ButtonHero />
        </div>
        <div className="flex justify-center items-center mb-2">
          <img
            src="/hero.webp"
            className="relative bottom-10 animate-spin-clockwise animation-delay-500 hero-img"
            alt="Photo Header"
          />
        </div>
      </div>
    </section>
  );
}
