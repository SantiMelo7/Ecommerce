import Image from "next/image";
import CartButton from "../button/CartButton";
import { useContext } from "react";
import { CartContext } from "@/context/AppProvider";

function MenuItemProps({ className, ...menuItem }) {
  const { images, name, price, description, category } = menuItem;
  const { addToCart } = useContext(CartContext);

  return (
    <div className={`flex flex-col shadow-lg ${className}`}>
      <Image
        width={192}
        height={144}
        src={images}
        alt="Images"
        className="rounded-lg mx-auto mt-3"
      />
      <h1 className="mt-3 text-2xl text-center font-extrabold">{name}</h1>
      <h4 className="mt-3 text-lg text-center font-extrabold text-violet-300">
        {description}
      </h4>
      <CartButton onClick={() => addToCart(menuItem)} price={price} />
    </div>
  );
}

export default MenuItemProps;
