import Session from "./Sesion";

export default function ListMenu() {
  return (
    <>
      <ul className="flex gap-x-4 cursor-pointer relative right-8">
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
          <a href="/cart">Cart</a>
        </li>
        <li>
          <Session />
        </li>
      </ul>
    </>
  );
}
