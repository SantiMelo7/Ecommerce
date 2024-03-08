import Image from "next/image";
import CartButton from "../button/CartButton";
import { useContext } from "react";
import { CartContext } from "@/context/AppProvider";

function MenuItemProps({ className, ...menuItem }) {
  const { images, name, price } = menuItem;

  const { addToCart } = useContext(CartContext);

  return (
    <div
      className={`flex flex-col shadow-xl  ${className} hover:transition-all hover:scale-105 rounded-md`}
    >
      <Image
        width={192}
        height={144}
        src={images}
        alt="Images"
        className="rounded-lg mx-auto mt-3"
      />
      <h1 className="mt-3 text-2xl text-center font-extrabold">{name}</h1>
      <CartButton onClick={() => addToCart(menuItem)} price={price} />
    </div>
  );
}

export default MenuItemProps;
// "https://res.cloudinary.com/dqprmrwka/image/upload/v1706919795/images/g2tmpjv6wrk5cduupokc.jpg"
