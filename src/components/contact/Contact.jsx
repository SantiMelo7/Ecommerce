import MainTitle from "@/components/layout/MainTitle";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative">
      <Image
        src="/fondo-global.webp"
        width={900}
        height={50}
        className="object-center object-cover w-full h-full -z-10 absolute"
        alt="fondo-global"
      />
      <MainTitle title="Contact Us" subtTitle="¿What is Lorem Ipsum?" />
      <div className="flex justify-center gap-x-10 items-center lg:flex-row sm:flex-col md:max-w-screen-lg mt-5 sm:max-w-screen-sm mx-auto gap-y-4 text-center">
        <p className="span-about text-green-900 font-extrabold">
          Welcome to LoremIpsum, your bridge to the digital future. In a
          increasingly interconnected world, our company stands out as leader in
          providing advanced and accessible technological solutions to meet your
          secure communication needs
        </p>
        <p className="span-about text-orange-900 font-extrabold">
          At LoremIpsum, we understand the importance of staying connected in
          all the time. Whether through mobile devices, services in the cloud or
          Internet of Things solutions, we are here to ensure your technology
          experience is seamless, efficient and
        </p>
      </div>
    </div>
  );
}
