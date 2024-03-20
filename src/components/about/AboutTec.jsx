"use client";

import MainTitle from "../layout/MainTitle";
import TextAbout from "../layout/TextAbout";
import ImageSponsors from "../footer/ImageSponsors";
import Image from "next/image";

export default function AboutTec() {
  return (
    <div className="relative">
      <Image
        src="/fondo-about.webp"
        width={900}
        height={50}
        className="object-center object-cover w-full h-[85vh] -z-10 absolute"
      />
      <MainTitle title="About the shop" />
      <section className="flex flex-col justify-center items-center lg:text-center md:max-w-screen-lg mx-auto sm:max-w-screen-2xl sm:text-center">
        <TextAbout />
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4 mt-3 mb-8 md:ml-6">
          <ImageSponsors src="/photo-1.webp" alt="photo-1" />
          <ImageSponsors src="/photo-2.webp" alt="photo-2" />
          <ImageSponsors
            className="md:h-[16vh] sm:h-[30vh]"
            src="/photo-3.webp"
            alt="photo-3"
          />
          <ImageSponsors
            height={100}
            className="md:h-[16vh]"
            src="/photo-4.webp"
            alt="photo-4"
          />
          <ImageSponsors src="/photo-5.webp" alt="photo-5" />
          <ImageSponsors src="/photo-6.webp" alt="photo-6" />
          <ImageSponsors src="/photo-7.webp" alt="photo-7" />
          <ImageSponsors src="/photo-9.webp" alt="photo-9" />
        </div>
      </section>
    </div>
  );
}
