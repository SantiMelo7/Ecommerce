"use client";

import MainTitle from "../reutilizable/MainTitle";
import TextAbout from "../reutilizable/TextAbout";
import ImageSponsors from "../footer/ImageSponsors";

export default function AboutTec() {
  return (
    <>
      <MainTitle title="About the shop" />
      <div className="flex md:flex-row sm:flex-col justify-start items-start md:text-start md:max-w-screen-2xl mx-auto sm:max-w-screen-sm sm:text-center gap-4">
        <TextAbout />
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-3 mt-6">
          <ImageSponsors width={800} height={150} src="/photo-1.webp" />
          <ImageSponsors width={800} height={150} src="/photo-2.png" />
          <ImageSponsors
            width={800}
            height={100}
            className=" h-[18vh]"
            src="/photo-3.webp"
          />
          <ImageSponsors
            width={800}
            height={100}
            className=" h-[18vh]"
            src="/photo-4.webp"
          />
          <ImageSponsors width={800} height={150} src="/photo-5.webp" />
          <ImageSponsors width={800} height={150} src="/photo-6.avif" />
          <ImageSponsors width={800} height={150} src="/photo-7.avif" />
          <ImageSponsors width={800} height={150} src="/photo-8.avif" />
        </div>
      </div>
    </>
  );
}
