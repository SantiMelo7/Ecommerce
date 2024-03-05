function MainTitle({ title, subtTitle }) {
  return (
    <div className="flex flex-col justify-center items-center md:max-w-3xl sm:max-w-sm sm:pl-3 sm:pr-4 mx-auto mt-8">
      <h1 className="text-5xl text-red-500 font-extrabold text-center">
        {title}
      </h1>
      <h3 className="mt-3 text-2xl uppercase text-center md:mb-2 sm:mb-5">
        {subtTitle}
      </h3>
    </div>
  );
}

export default MainTitle;
