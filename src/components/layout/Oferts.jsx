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
  alt,
}) {
  return (
    <section className="grid grid-cols-2 max-w-screen-2xl">
      <div
        className={`absolute ${margin} flex flex-col justify-center items-center w-full mx-auto text-center animate-zoom-in animate-delay-900`}
      >
        <div>
          <h1 className="text-5xl mt-2 font-extrabold text-[#FEFAE2]">
            {title}
          </h1>
          <h4 className="text-2xl font-extrabold text-gray-700 mt-2 pl-3">
            {date}
          </h4>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mt-2 text-red-900 font-extrabold">
            {description}
          </h2>
          <Image
            src={srcOfert}
            width={width}
            height={height}
            className="object-center object-cover mt-2"
          />
        </div>
      </div>
    </section>
  );
}
