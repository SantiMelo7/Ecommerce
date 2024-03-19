export default function ImageSponsors({ src, alt, className }) {
  return (
    <img
      className={`${className} hover:transition-all hover:scale-95 rounded-md about-img`}
      src={src}
      alt={alt}
    />
  );
}
