import Image from "next/image";

export default function Oferts({
  title,
  date,
  description,
  src,
  srcOfert,
  margin,
  width,
  height,
}) {
  return (
    <section className="grid grid-cols-2 w-screen md:h-[30vh] sm:h-[40vh] relative">
      <Image
        src={src}
        width={100}
        height={50}
        className="object-center object-cover w-screen md:h-[30vh] sm:h-[40vh] -z-10"
        alt="Fondo"
      />
      <div
        className={`absolute ${margin} flex md:flex-row sm:flex-col justify-center items-center max-w-screen-2xl mx-auto text-center animate-zoom-in animate-delay-900`}
      >
        <h1 className="text-3xl font-extrabold text-[#FEFAE2]">{title}</h1>
        <h4 className="text-xl font-extrabold text-gray-700 mt-2 pl-3">
          {date}
        </h4>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl mt-2 text-red-900 font-extrabold">
            {description}
          </h2>
          <Image
            src={srcOfert}
            width={width}
            height={height}
            className="object-center object-cover mt-2"
            alt="Ofertas"
          />
        </div>
      </div>
    </section>
  );
}
