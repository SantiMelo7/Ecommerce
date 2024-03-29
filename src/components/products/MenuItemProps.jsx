import CartButton from "../button/CartButton";
import { useContext } from "react";
import { CartContext, cartPrice } from "@/context/AppProvider";
import { DeleteIconItem } from "../layout/IconsItem";

function MenuItemProps({ className, config, product, ...menuItem }) {
  const { removeCart } = useContext(CartContext);
  const { images, name, price, description, category } = menuItem;
  const { addToCart } = useContext(CartContext);

  return (
    <div className={`flex flex-col shadow-lg ${className}`}>
      {config.ShowImages && (
        <img
          width={200}
          height={200}
          src={images}
          alt="Images"
          className="rounded-lg mx-auto mt-3"
        />
      )}
      {config.ShowName && (
        <h1 className="mt-3 text-2xl text-center font-extrabold">{name}</h1>
      )}
      {config.ShowDescription && (
        <h4 className="mt-3 text-xl text-center font-extrabold text-orange-300">
          {description}
        </h4>
      )}
      {config.ShowPrice && (
        <CartButton onClick={() => addToCart(menuItem)} price={price} />
      )}
      {config.ShowCategory && (
        <div className="flex justify-center items-center bg-purple-300 w-[40%] mx-auto mt-2 mb-4 rounded-md">
          <span className="text-xl mb-3 text-white pt-3">{category.name}</span>
        </div>
      )}
      {config.ShowPriceTotal && (
        <div className="flex justify-center items-center">
          <p className="text-2xl font-extrabold text-red-500">
            {`$${cartPrice(product)}`}
          </p>
        </div>
      )}
      {config.ShowDelete && (
        <div className="flex flex-col left-3 relative mt-5">
          <button onClick={() => removeCart(product)}>
            <DeleteIconItem />
          </button>
        </div>
      )}
    </div>
  );
}

export default MenuItemProps;
