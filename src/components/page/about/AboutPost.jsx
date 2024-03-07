import { UsePostAboutProducts } from "@/hooks/useAboutImagesRestaurant";
import AboutProps from "./AboutProps";

export default function AboutPost() {
  const { aboutProducts } = UsePostAboutProducts();

  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 md:pl-4 md:pr-4 sm:grid-cols-1 gap-7 md:max-w-screen-xl md:mt-10 sm:max-w-screen-sm sm:mx-auto">
      {aboutProducts.length > 0 &&
        aboutProducts.map((text, index) => (
          <div key={index}>
            <AboutProps {...text} />
          </div>
        ))}
    </div>
  );
}
