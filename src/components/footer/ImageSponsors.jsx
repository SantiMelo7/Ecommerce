import Image from "next/image";

export default function ImageSponsors({ src, alt }) {
  return <Image src={src} width={50} height={50} alt={alt} />;
}
