export default function ButtonCreate({ className }) {
  return (
    <button
      className={`${className} py-2 px-20 mb-4 text-white font-bold text-xl rounded-md`}
      type="submit"
    >
      Create
    </button>
  );
}
