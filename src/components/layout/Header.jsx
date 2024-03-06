import ListMenu from "./ListMenu";
import Session from "./Sesion";

export default function Header() {
  return (
    <header className="flex w-screen h-full top-2 relative md:justify-between text-white text-lg overflow-auto">
      <div className="pl-5">
        <h1 className="text-2xl">
          <a href="/">Ecommerce</a>
        </h1>
      </div>
      <nav className="flex flex-grow md:justify-center md:items-center sm:flex-col relative -right-20">
        <ListMenu />
      </nav>
      <Session />
    </header>
  );
}
