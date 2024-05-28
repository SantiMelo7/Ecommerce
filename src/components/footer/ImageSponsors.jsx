export default function ImageSponsors({ src, alt, className }) {
  return (
    <img
      width={30}
      height={30}
      className={`${className} hover:transition-all hover:scale-125 rounded-sm about-img`}
      src={src}
      alt={alt}
    />
  );
}
