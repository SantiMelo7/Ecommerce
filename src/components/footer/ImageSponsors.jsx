export default function ImageSponsors({ src, alt, className }) {
  return (
    <img
      width={50}
      height={50}
      className={`${className} hover:transition-all hover:scale-125 rounded-sm  about-img`}
      src={src}
      alt={alt}
    />
  );
}
