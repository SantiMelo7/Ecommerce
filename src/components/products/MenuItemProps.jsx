import CartButton from "../button/CartButton";
import { useContext } from "react";
import { CartContext } from "@/context/AppProvider";

function MenuItemProps({ className, config, ...menuItem }) {
  const { images, name, price, description, category } = menuItem;
  const { addToCart } = useContext(CartContext);

  return (
    <div className={`flex flex-col shadow-lg ${className}`}>
      {config.ShowImages && (
        <img
          width={192}
          height={144}
          src={images}
          alt="Images"
          className="rounded-lg mx-auto mt-3"
        />
      )}
      {config.ShowName && (
        <h1 className="mt-3 text-2xl text-center font-extrabold">{name}</h1>
      )}
      {config.ShowDescription && (
        <h4 className="mt-3 text-lg text-center font-extrabold text-violet-300">
          {description}
        </h4>
      )}
      {config.ShowPrice && (
        <CartButton onClick={() => addToCart(menuItem)} price={price} />
      )}
      {config.ShowCategory && (
        <div className="flex justify-center items-center bg-purple-300 w-[40%] mx-auto mt-2 mb-4 rounded-md">
          <span className="text-xl mb-3 text-white pt-3">{category}</span>
        </div>
      )}
    </div>
  );
}

export default MenuItemProps;
