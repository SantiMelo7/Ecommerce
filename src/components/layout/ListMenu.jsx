import { CartIcon } from "../reutilizable/Icons";

export default function ListMenu() {
  return (
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
        <a>
          <CartIcon />
        </a>
      </li>
    </ul>
  );
}
