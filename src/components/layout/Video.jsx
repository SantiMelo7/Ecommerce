export default function Video({ src }) {
  return (
    <video
      loop
      muted
      autoPlay
      className="object-center object-cover h-full w-full -z-40 animate-fade-in animate-delay-300"
      src={src}
    />
  );
}
