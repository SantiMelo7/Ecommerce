export default function ButtonCreate({ className }) {
  return (
    <button
      className={`${className} mt-10 py-2 px-20 mb-4 text-black font-bold text-xl rounded-md`}
      type="submit"
    >
      Create
    </button>
  );
}
