import { Facebook } from "@/components/layout/IconsFooter";
import TitleFooter from "./TitleFooter";
import ListText from "./ListText";
import CityFooter from "./CityFooter";

export default function Footer() {
  return (
    <footer className="bg-[#255E9E]">
      <div className="sm:grid sm:grid-cols-2 md:flex md:flex-row justify-center items-center mt-9  max-w-screen-2xl">
        <div className="relative md:right-[150px]">
          <TitleFooter title="Follow us social media" />
          <div className="mt-5 flex flex-row justify-center items-center gap-x-4">
            <Facebook />
            <img src="./public/instagram.png"></img>
          </div>
        </div>
        <div className="relative mt-8 md:-left-[100px]">
          <TitleFooter title="Products" />
          <div>
            <ListText text="All shorts" />
            <ListText text="Hoodies" />
            <ListText text="Crewneck" />
            <ListText text="Hats" />
            <ListText text="See more" />
            <ListText text="Tote bags" />
          </div>
        </div>
        <div className="relative md:right-[30px]">
          <TitleFooter title="Services" />
          <div>
            <ListText text="Embroidery" />
            <ListText text="Screen printin" />
            <ListText text="DTG pinting" />
            <ListText text="Design Studio" />
            <ListText text="Design Templates" />
          </div>
        </div>
        <div className="relative mt-9 md:left-[20px]">
          <TitleFooter title="Help" />
          <div>
            <ListText text="Privacity policy" />
            <ListText text="FAQ" />
            <ListText text="DTG pinting" />
            <ListText text="Promo Codes" />
            <ListText text="Hats" />
            <ListText text="Design Code" />
          </div>
        </div>
        <div className="relative md:left-[200px] mt-9 grid grid-cols-2 gap-x-4 gap-y-4">
          <img
            src="./public/footer-images/mastercard.webp"
            alt="Mastercard"
          ></img>
          <img src="./public/footer-images/paypal.webp" alt="Mastercard"></img>
          <img
            src="./public/footer-images/discover.webp"
            alt="Mastercard"
          ></img>
          <img src="./public/footer-images/visa.webp" alt="Mastercard"></img>
        </div>
      </div>
      <CityFooter />
    </footer>
  );
}
