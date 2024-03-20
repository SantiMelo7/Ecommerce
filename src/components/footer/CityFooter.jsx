export default function CityFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative md:bg-transparent opacity-[1] sm:bg-[#000] md:border-none block h-full pb-2">
      <ul
        className={`
           md:flex sm:grid md:flex-row sm:grid-cols-3 justify-center mt-3 items-center gap-x-4 sm:pt-5 sm:gap-y-4 text-gray-300 text-sm text-center
        `}
      >
        <li>{year}</li>
        <li>Pachuca</li>
        <li>CDMX</li>
        <li>Estado de México</li>
        <li>Jalisco</li>
        <li>Monterrey</li>
        <li>Puebla</li>
        <li>León</li>
        <li>Tijuana</li>
        <li>Aguascalientes</li>
        <li>Durango</li>
        <li>Mexicali</li>
        <li>Tamaulipas</li>
        <li>Hermosillo</li>
      </ul>
    </footer>
  );
}
