export default function ImageSponsors({ src, alt, className }) {
  return (
    <img
      className={`${className} hover:transition-all hover:scale-125 rounded-sm  about-img`}
      src={src}
      alt={alt}
    />
  );
}
