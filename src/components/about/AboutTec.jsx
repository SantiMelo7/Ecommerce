"use client";

import MainTitle from "../layout/MainTitle";
import TextAbout from "../layout/TextAbout";
import ImageSponsors from "../footer/ImageSponsors";

export default function AboutTec() {
  return (
    <>
      <MainTitle title="About the shop" />
      <div className="flex lg:flex-row sm:flex-col justify-start items-start lg:text-start md:max-w-screen-2xl mx-auto sm:max-w-screen-sm sm:text-center">
        <TextAbout />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3 mt-3 mb-8 md:mr-3 sm:mr-0">
          <ImageSponsors
            width={500}
            height={150}
            src="/photo-1.webp"
            alt="photo-1"
          />
          <ImageSponsors
            width={500}
            height={150}
            src="/photo-2.webp"
            alt="photo-2"
          />
          <ImageSponsors
            width={500}
            height={100}
            className="md:h-[16vh] sm:h-[30vh]"
            src="/photo-3.webp"
            alt="photo-3"
          />
          <ImageSponsors
            width={500}
            height={100}
            className="md:h-[16vh]"
            src="/photo-4.webp"
            alt="photo-4"
          />
          <ImageSponsors
            width={500}
            height={150}
            src="/photo-5.webp"
            alt="photo-5"
          />
          <ImageSponsors
            width={500}
            height={150}
            src="/photo-6.webp"
            alt="photo-6"
          />
          <ImageSponsors
            width={500}
            height={150}
            src="/photo-7.webp"
            alt="photo-7"
          />
          <ImageSponsors
            width={500}
            height={150}
            src="/photo-8.webp"
            alt="photo-8"
          />
        </div>
      </div>
    </>
  );
}
