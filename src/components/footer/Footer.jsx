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
      <div className="flex flex-row justify-between max-w-screen-2xl">
        <div className="mt-5 flex flex-row justify-center items-center gap-x-4">
          <TitleFooter title="Follow us social media" />
          <FacebookIcon className="text-blue-500 w-[50px] h-[50px]" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
            rel="stylesheet"
          />
          <i className="fa fa-instagram" id="insta" aria-hidden="true"></i>
        </div>
        <div className="mt-6">
          <TitleFooter title="Products" />
          <ListText text="All shorts" />
          <ListText text="Hoodies" />
          <ListText text="Crewneck" />
          <ListText text="Hats" />
          <ListText text="See more" />
          <ListText text="Tote bags" />
        </div>
        <div>
          <Image src="/logo.webp" width={200} height={200} />
        </div>
        <div className="mt-8">
          <TitleFooter title="Services" />
          <ListText text="Embroidery" />
          <ListText text="Screen printin" />
          <ListText text="DTG pinting" />
          <ListText text="Design Studio" />
          <ListText text="Design Templates" />
        </div>
        <div className="mt-9 md:grid md:grid-cols-2 gap-x-4 md:gap-y-4 sm:gap-y-8">
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
