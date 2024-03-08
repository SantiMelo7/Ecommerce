import Image from "next/image";

export default function ImageSponsors({ src, alt, width, height, className }) {
  return (
    <Image
      className={`${className} hover:transition-all hover:scale-95 rounded-md`}
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  );
}
