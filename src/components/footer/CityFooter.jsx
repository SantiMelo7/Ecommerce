export default function CityFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative md:bg-transparent opacity-[1] sm:bg-[#000] md:border-none block
        sm:border-white sm:border-t-[2px] h-full pb-2"
    >
      <ul
        className={`
           md:flex sm:grid md:flex-row sm:grid-cols-4 justify-center mt-3 items-center gap-x-4 sm:pt-5 sm:gap-y-4 text-white text-sm text-center
        `}
      >
        <li>{year}</li>
        <li>Los Angeles</li>
        <li>Logn Beach</li>
        <li>San Diego</li>
        <li>San Jose</li>
        <li>San Francisco</li>
        <li>Irvine</li>
        <li>Seatle, WA</li>
        <li>Las Vegas</li>
        <li>New England</li>
        <li>Detroit</li>
        <li>Missisipi</li>
        <li>California</li>
        <li>Arizona</li>
      </ul>
    </footer>
  );
}
