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
          <ImageSponsors src="/photo-8.webp" alt="photo-8" />
          <ImageSponsors src="/photo-9.webp" alt="photo-9" />
          <ImageSponsors src="/photo-10.webp" alt="photo-10" />
          <ImageSponsors src="/photo-11.webp" alt="photo-11" />
          <ImageSponsors src="/photo-12.webp" alt="photo-12" />
        </div>
      </div>
    </>
  );
}
