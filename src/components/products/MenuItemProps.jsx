function MenuItemProps({ className, ...item }) {
  const { images, name, price, addToCard } = item;

  return (
    <div
      className={`flex flex-col shadow-xl  ${className} hover:transition-all  rounded-md`}
    >
      <img src={images} className="w-50 rounded-lg h-36 mx-auto mt-3"></img>
      <h1 className="mt-3 text-2xl text-center font-extrabold">{name}</h1>
      <button
        onClick={addToCard}
        className="bg-red-300 w-48 mx-auto font-bold py-4 px-6 mb-3 mt-4 text-center rounded-lg"
      >
        Add To Cart ${price}
      </button>
    </div>
  );
}

export default MenuItemProps;
