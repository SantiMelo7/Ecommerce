import ButtonHero from "../layout/ButtonsHero";
import TextHero from "../layout/TextHero";

export default function HeroMenu() {
  return (
    <section className="relative md:top-20 sm:top-14 bg-gray-800">
      <div className="xl:grid xl:grid-cols-2 flex flex-col justify-center items-center">
        <div className="sm:text-center font-semibold text-gray-300 md:relative md:-top-8">
          <h1 className="text-4xl font-bold text-red-600">Mackbook Pro 14</h1>
          <TextHero />
          <ButtonHero />
        </div>
        <div className="relative md:bottom-[70px] md:mb-0 sm:mb-10 flex justify-center items-center">
          <img src="hero.png" className="w-[500px]" alt="Photo Header"></img>
        </div>
      </div>
    </section>
  );
}
