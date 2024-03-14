import ListMenu from "./ListMenu";
import Session from "./Sesion";

export default function Header() {
  return (
    <header className="flex w-screen h-full pt-1 relative md:justify-between items-center md:flex-row sm:flex-col text-white text-lg overflow-hidden animate-slide-in-left animate-delay-200">
      <div className="md:pl-5 sm:pl-1">
        <h1 className="text-2xl bottom-[7px] sm:text-center sm:right-2 sm:relative">
          <a href="/">Ecommerce</a>
        </h1>
      </div>
      <nav className="flex justify-center items-center md:pt-[4px] sm:mt-2 max-w-screen-xl mx-auto">
        <ListMenu />
      </nav>
      <Session />
    </header>
  );
}
