function AboutProps({ className, ...item }) {
  const { images } = item;

  return (
    <div
      className={`flex flex-col ${className} shadow-xl hover:transition-all rounded-md`}
    >
      <img src={images} className="w-50 rounded-lg h-36 mx-auto mt-3"></img>
    </div>
  );
}

export default AboutProps;
