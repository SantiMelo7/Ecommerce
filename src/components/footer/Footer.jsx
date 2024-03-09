import TitleFooter from "./TitleFooter";
import ListText from "./ListText";
import CityFooter from "./CityFooter";
import Image from "next/image";
import {
  AmexIcon,
  StripeIcon,
  FacebookIconFooter,
  MastercardIcon,
  PaypalIcon,
  SantanderIcon,
  VisaIcon,
} from "../layout/Icons";

export default function Footer() {
  return (
    <footer className="bg-[#255E9E]">
      <div className="sm:grid sm:grid-cols-2 md:flex md:flex-row justify-center items-center mt-9 max-w-screen-2xl">
        <div className="relative md:right-[150px]">
          <TitleFooter title="Follow us social media" />
          <div className="mt-5 flex flex-row justify-center items-center gap-x-4">
            <FacebookIconFooter />
            <Image
              src="/instagram.webp"
              width={50}
              height={100}
              alt="Instagram Logo"
            />
          </div>
        </div>
        <div className="relative mt-8 md:-left-[50px]">
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
        <div className="relative md:left-[50px]">
          <TitleFooter title="Services" />
          <div>
            <ListText text="Embroidery" />
            <ListText text="Screen printin" />
            <ListText text="DTG pinting" />
            <ListText text="Design Studio" />
            <ListText text="Design Templates" />
          </div>
        </div>
        <div className="relative mt-9 md:left-[100px]">
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
        <div className="relative mt-9 md:left-[150px]">
          <TitleFooter title="Inside Grace Eleyae" />
          <div>
            <ListText text="About Us" />
            <ListText text="Ge Maganize" />
            <ListText text="Why Satin" />
            <ListText text="Contact Us" />
            <ListText text="Wholesale" />
            <ListText text="Carrers" />
          </div>
        </div>
        <div className="relative md:left-[350px] sm:left-[20px] mt-9 md:grid md:grid-cols-2 gap-x-4 md:gap-y-4 sm:gap-y-8">
          <div className="flex border-[2px] border-gray-700 px-4 md:w-44 sm:w-32 bg-black justify-center items-center">
            <VisaIcon />
          </div>
          <div className="flex border-[2px] border-gray-700 px-4 md:w-44 sm:w-32 bg-black justify-center items-center">
            <PaypalIcon />
          </div>
          <div className="flex border-[2px] border-gray-700 px-4 md:w-44 sm:w-32 bg-black justify-center items-center z-10 relative">
            <StripeIcon />
          </div>
          <div className="flex border-[2px] border-gray-700 px-4 md:w-44 sm:w-32 bg-black justify-center items-center">
            <AmexIcon />
          </div>
          <div className="flex border-[2px] border-gray-700 px-4 md:w-44 sm:w-32 bg-black justify-center items-center">
            <MastercardIcon />
          </div>
        </div>
      </div>
      <CityFooter />
    </footer>
  );
}
