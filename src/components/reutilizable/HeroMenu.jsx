import ButtonHero from "../layout/ButtonsHero";
import TextHero from "../layout/TextHero";
import { Hero } from "../../../public/hero.png";

export default function HeroMenu() {
  return (
    <section className="relative lg:top-4 md:top-4 sm:top-14 bg-gray-800">
      <div className="xl:grid xl:grid-cols-2 flex flex-col justify-center items-center">
        <div className="sm:text-center font-semibold text-gray-300 md:top-4">
          <h1 className="text-4xl font-bold text-red-600">Mackbook Pro 14</h1>
          <TextHero />
          <ButtonHero />
        </div>
        <div className="flex justify-center items-center">
          <img
            width={500}
            height={100}
            src={Hero}
            className="relative bottom-10"
            alt="Photo Header"
          />
        </div>
      </div>
    </section>
  );
}
