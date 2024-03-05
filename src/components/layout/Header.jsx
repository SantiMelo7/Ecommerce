export default function Header() {
  return (
    <header className="flex w-screen h-full top-2 relative justify-between text-white text-lg">
      <div className="pl-5">
        <h1 className="text-2xl">Ecommerce</h1>
      </div>
      <nav className="flex flex-grow justify-center items-center">
        <ul className="flex gap-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>
            <a href="/products">All Products</a>
          </li>
          <li>
            <a>Login</a>
          </li>
          <li href="/cart">
            <a>Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
