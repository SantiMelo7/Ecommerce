import ListMenu from "./ListMenu";
import Session from "./Sesion";
import Video from "./Video";

export default function HeroMenu() {
  return (
    <section className="flex justify-center items-center w-screen md:h-[50vh] sm:h-[70vh]  mx-auto relative">
      <Video src="/video.mp4" />
      <div className="absolute mb-64">
        <img
          src="/logo.webp"
          className="hero-img animate-blurred-fade-in animate-delay-100"
          alt="Logo de la tienda"
        />
      </div>
      <div className="absolute md:mt-8 sm:mb-10 flex flex-row">
        <h1 className="text-5xl font-extrabold text-orange-500 animate-flip-y animate-delay-100 z-40">
          Lorem Ipsum Tec
        </h1>
      </div>
      <div className="absolute mt-44 animate-shake animate-delay-100">
        <ListMenu />
      </div>
      <div className="absolute">
        <Session />
      </div>
    </section>
  );
}
