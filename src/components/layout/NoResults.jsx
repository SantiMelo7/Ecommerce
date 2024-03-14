export default function NoResults({ item }) {
  return (
    <>
      {item.length === 0 ? (
        <div className="flex justify-center items-center max-w-max mx-auto">
          <h1 className="text-xl justify-centerm text-center text-red-500">
            No hay resultados por ahora
          </h1>
        </div>
      ) : null}
    </>
  );
}
