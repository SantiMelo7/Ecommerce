import TitleFooter from "./TitleFooter";
import ListText from "./ListText";
import CityFooter from "./CityFooter";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  AmexIcon,
  StripeIcon,
  PaypalIcon,
  VisaIcon,
  ApplePayIcon,
  MercadoPagoIcon,
} from "../layout/Icons";
import SponsorsFake from "./SponsorsFake";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="flex md:flex-row sm:flex-col justify-center max-w-screen-2xl mx-auto">
        <div className="mt-5 flex flex-row md:justify-between sm:justify-center items-center gap-x-4">
          <TitleFooter title="Follow us social media" />
          <FacebookIcon className="text-blue-500 w-[50px] h-[50px]" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
            rel="stylesheet"
          />
          <i className="fa fa-instagram" id="insta" aria-hidden="true"></i>
        </div>
        <div className="mt-6 md:relative md:left-32">
          <TitleFooter title="Products" />
          <ListText text="All shorts" />
          <ListText text="Hoodies" />
          <ListText text="Crewneck" />
          <ListText text="Hats" />
          <ListText text="See more" />
          <ListText text="Tote bags" />
        </div>
        <div className="flex justify-center items-center max-w-screen-2xl mx-auto md:relative md:left-40">
          <Image src="/logo.webp" width={200} height={200} />
        </div>
        <div className="md:mt-8 sm:mt-0 md:relative md:left-40">
          <TitleFooter title="Services" />
          <ListText text="Embroidery" />
          <ListText text="Screen printin" />
          <ListText text="DTG pinting" />
          <ListText text="Design Studio" />
          <ListText text="Design Templates" />
        </div>
        <div className="mt-9 sm:grid sm:grid-cols-2 max-w-screen-2xl mx-auto sm:gap-y-8 md:relative lg:left-[115px]">
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
