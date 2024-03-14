import TitleFooter from "./TitleFooter";
import ListText from "./ListText";
import CityFooter from "./CityFooter";
import Image from "next/image";
import {
  AmexIcon,
  StripeIcon,
  FacebookIconFooter,
  PaypalIcon,
  VisaIcon,
  ApplePayIcon,
  MercadoPagoIcon,
} from "../layout/Icons";
import SponsorsFake from "./SponsorsFake";

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="sm:grid sm:grid-cols-2 lg:flex lg:flex-row md:flex-col justify-center items-center mt-9 max-w-screen-2xl">
        <div className="relative lg:right-[150px]">
          <TitleFooter title="Follow us social media" />
          <div className="mt-5 flex flex-row justify-center items-center gap-x-4">
            <FacebookIconFooter />
            <Image
              src="/instagram.webp"
              width={50}
              height={10}
              alt="Instagram Logo"
            />
          </div>
        </div>
        <div className="relative mt-8 lg:-left-[50px]">
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
        <div className="relative lg:left-[50px]">
          <TitleFooter title="Services" />
          <div>
            <ListText text="Embroidery" />
            <ListText text="Screen printin" />
            <ListText text="DTG pinting" />
            <ListText text="Design Studio" />
            <ListText text="Design Templates" />
          </div>
        </div>
        <div className="relative mt-9 lg:left-[150px]">
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
        <div className="relative mt-9 lg:left-[220px]">
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
        <div className="relative lg:left-[370px] sm:left-[50px] mt-9 md:grid md:grid-cols-2 gap-x-4 md:gap-y-4 sm:gap-y-8">
          <SponsorsFake img={<VisaIcon />} />
          <SponsorsFake img={<PaypalIcon />} />
          <SponsorsFake img={<StripeIcon />} />
          <SponsorsFake img={<AmexIcon />} />
          <SponsorsFake img={<ApplePayIcon />} />
          <SponsorsFake img={<MercadoPagoIcon />} />
        </div>
      </div>
      <CityFooter />
    </footer>
  );
}
