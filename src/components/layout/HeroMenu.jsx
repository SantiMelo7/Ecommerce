import ListMenu from "./ListMenu";
import Video from "./Video";

export default function HeroMenu() {
  return (
    <section className="flex justify-center items-center w-screen h-[50vh] mx-auto relative">
      <Video src="/video.mp4" />
      <div className="absolute md:mb-48 sm:mb-44">
        <img
          src="/logo.webp"
          className="hero-img animate-blurred-fade-in animate-delay-100"
          alt="Logo de la tienda"
        />
      </div>
      <div className="absolute mt-10">
        <h1 className="text-5xl font-extrabold text-black animate-flip-y animate-delay-100">
          Lorem Ipsum Tec
        </h1>
      </div>
      <div className="absolute mt-52 animate-shake animate-delay-100">
        <ListMenu />
      </div>
    </section>
  );
}
