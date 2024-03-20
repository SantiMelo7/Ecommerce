import MainTitle from "@/components/layout/MainTitle";
import GenericInput from "../form/GenericInput";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative">
      <Image
        src="/fondo-global.webp"
        width={900}
        height={50}
        className="object-center object-cover w-full md:h-[60vh] sm:h-full -z-10 absolute"
      />
      <MainTitle title="Contact Us" subtTitle="¿Qué es Lorem Ipsum?" />
      <div className="flex justify-center gap-x-10 items-center md:flex-row sm:flex-col md:max-w-screen-md mt-5 sm:max-w-screen-sm mx-auto gap-y-4 text-center">
        <p className="span-about text-green-900 font-extrabold">
          Bienvenido a LoremIpsum, tu puente hacia el futuro digital. En un
          mundo cada vez más interconectado, nuestra empresa se destaca como
          líder en proporcionar soluciones tecnológicas avanzadas y accesibles
          para satisfacer tus necesidades de comunicación segura.
        </p>
        <p className="span-about text-orange-900 font-extrabold">
          En LoremIpsum, entendemos la importancia de mantenernos conectados en
          todo momento. Ya sea a través de dispositivos móviles, servicios en la
          nube o soluciones de Internet de las cosas (IoT), estamos aquí para
          garantizar que tu experiencia tecnológica sea fluida, eficiente y
        </p>
      </div>
      <div className="flex justify-center">
        <h1 className="text-xl text-center font-extrabold mt-10">
          Conviertete en un Lorem Ipsum en nuestra comunidad
        </h1>
      </div>
      <div className="flex md:flex-row sm:flex-col justify-center items-center gap-x-10">
        <GenericInput className="w-[40vh]" label="Name" />
        <GenericInput className="w-[40vh]" label="Email" />
        <div className="block md:mt-14 sm:mt-8 sm:pb-4">
          <button className="bg-red-200 text-2xl font-bold px-10 py-2 rounded-md">
            Suscríbete
          </button>
        </div>
      </div>
    </div>
  );
}
