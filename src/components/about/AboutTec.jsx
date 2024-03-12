"use client";

import MainTitle from "../reutilizable/MainTitle";
import TextAbout from "../reutilizable/TextAbout";
import ImageSponsors from "../footer/ImageSponsors";

export default function AboutTec() {
  return (
    <>
      <MainTitle title="About the shop" />
      <div className="flex md:flex-row sm:flex-col justify-start items-start md:text-start md:max-w-screen-2xl mx-auto sm:max-w-screen-sm sm:text-center">
        <TextAbout />
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-3 mt-3 mb-8">
          <ImageSponsors width={800} height={150} src="/photo-1.webp" />
          <ImageSponsors width={800} height={150} src="/photo-2.webp" />
          <ImageSponsors
            width={800}
            height={100}
            className=" h-[16vh]"
            src="/photo-3.webp"
          />
          <ImageSponsors
            width={800}
            height={100}
            className=" h-[16vh]"
            src="/photo-4.webp"
          />
          <ImageSponsors width={800} height={150} src="/photo-5.webp" />
          <ImageSponsors width={800} height={150} src="/photo-6.webp" />
          <ImageSponsors width={800} height={150} src="/photo-7.webp" />
          <ImageSponsors width={800} height={150} src="/photo-8.webp" />
          <ImageSponsors width={800} height={150} src="/photo-9.webp" />
          <ImageSponsors width={800} height={150} src="/photo-10.webp" />
          <ImageSponsors width={800} height={150} src="/photo-11.webp" />
          <ImageSponsors width={800} height={150} src="/photo-12.webp" />
        </div>
      </div>
    </>
  );
}
