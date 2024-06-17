"use client";

import MainTitle from "../layout/MainTitle";
import TextAbout from "../layout/TextAbout";
import ImageSponsors from "../footer/ImageSponsors";

export default function AboutTec() {
  return (
    <div className="relative">
      <MainTitle title="About the shop" />
      <section className="grid md:grid-cols-3 gap-y-0 gap-x-0 sm:grid-cols-2 gap-4 mt-3 mb-8">
        <TextAbout />
        <div>
          <ImageSponsors
            className="about-img"
            src="/photo-1.webp"
            alt="photo-5"
          />
          <ImageSponsors
            className="about-img"
            src="/photo-2.webp"
            alt="photo-5"
          />
          <ImageSponsors
            className="about-img"
            src="/photo-3.webp"
            alt="photo-5"
          />
          <ImageSponsors
            className="about-img"
            src="/photo-4.webp"
            alt="photo-6"
          />
          <ImageSponsors
            className="about-img"
            src="/photo-5.webp"
            alt="photo-7"
          />
        </div>
      </section>
    </div>
  );
}
