import Image from "next/image";

function AboutProps({ className, ...item }) {
  const { images } = item;

  return (
    <div
      className={`flex flex-col ${className} shadow-xl hover:transition-all rounded-md`}
    >
      <Image
        width={192}
        height={136}
        src={images}
        alt="Tecnhology Site"
        className="rounded-lg h-36 mx-auto mt-3"
      />
    </div>
  );
}

export default AboutProps;
