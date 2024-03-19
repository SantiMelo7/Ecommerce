export default function CartButton({ price, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-orange-500 w-48 text-white text-lg mx-auto font-bold py-2 px-6 mb-3 mt-4 text-center rounded-lg hover:transition-all hover:scale-110 inline-block"
    >
      Add To Cart ${price}
    </button>
  );
}
