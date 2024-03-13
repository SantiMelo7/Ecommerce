import useImageCloudinary from "@/hooks/useImageCloudinary";
import Image from "next/image";

export default function ImageCloudinary({ link, setLink }) {
  const { loanding, handleFile } = useImageCloudinary(setLink);

  return (
    <>
      {!link ? (
        <div className="rounded-md md:w-[70vh] sm:w-[40vh] bg-gradient-to-r to-[#2993B5] from-[#2CA257] flex justify-center items-center p-2 absolute">
          <label
            htmlFor="file"
            className="relative h-[15px] rounded-[25px] flex justify-center items-center text-white font-bold cursor-pointer "
          >
            Da click aquí
          </label>
          <input
            className="hidden"
            id="file"
            type="file"
            multiple
            onChange={handleFile}
          />
        </div>
      ) : null}

      {loanding ? (
        <h3 className="text-center font-semibold text-black text-xl mt-3">
          Loanding...
        </h3>
      ) : (
        link && (
          <div className="sm:flex sm:justify-center">
            <Image
              priority
              src={link}
              alt="Photo Menu"
              width={150}
              height={100}
              className="mt-3 mb-3 rounded-lg"
            />
          </div>
        )
      )}

      {!link && (
        <div className="mt-4 flex justify-center">
          <p className="text-2xl text-red-400 mb-6 mt-10 font-bold">
            No Image Select
          </p>
        </div>
      )}
    </>
  );
}
