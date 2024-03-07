import Image from "next/image";
import CartButton from "../button/CartButton";

function MenuItemProps({ className, addToCard, ...item }) {
  const { images, name, price } = item;

  return (
    <div
      className={`flex flex-col shadow-xl  ${className} hover:transition-all  rounded-md`}
    >
      <Image
        width={192}
        height={144}
        src={images}
        alt="Images"
        className="rounded-lg mx-auto mt-3"
      ></Image>
      <h1 className="mt-3 text-2xl text-center font-extrabold">{name}</h1>
      <CartButton onClick={addToCard} price={price} />
    </div>
  );
}

export default MenuItemProps;
