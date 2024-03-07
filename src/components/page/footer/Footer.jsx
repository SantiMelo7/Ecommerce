import { Facebook } from "@/components/layout/IconsFooter";
import TitleFooter from "./TitleFooter";
import ListText from "./ListText";
import CityFooter from "./CityFooter";

export default function Footer() {
  return (
    <footer className="bg-[#245387]">
      <div className="flex flex-row justify-center items-center mt-10 gap-x-52 max-w-screen-2xl">
        <div className="">
          <TitleFooter title="Follow us social media" />
          <div className="mt-5 flex flex-row justify-center items-center gap-x-4">
            <Facebook />
            <img src="./public/instagram.png"></img>
          </div>
        </div>
        <div className="mt-5">
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
        <div className="relative bottom-3">
          <TitleFooter title="Services" />
          <div>
            <ListText text="Embroidery" />
            <ListText text="Screen printin" />
            <ListText text="DTG pinting" />
            <ListText text="Design Studio" />
            <ListText text="Design Templates" />
          </div>
        </div>
        <div className="mt-5">
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
      </div>
      <CityFooter />
    </footer>
  );
}
