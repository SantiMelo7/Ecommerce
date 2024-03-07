export default function CartButton({ price, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-red-300 w-48 mx-auto font-bold py-4 px-6 mb-3 mt-4 text-center rounded-lg"
    >
      Add To Cart ${price}
    </button>
  );
}
