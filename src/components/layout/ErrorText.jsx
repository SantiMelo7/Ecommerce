export default function ErrorText({ error }) {
  return (
    <>
      {error ? (
        <p className="text-xl font-extrabold text-center text-red-500">
          Lo sentimos, vuela a intentarlo
        </p>
      ) : null}
    </>
  );
}
