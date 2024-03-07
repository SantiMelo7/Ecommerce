import useImageCloudinary from "@/hooks/useImageCloudinary";
import Image from "next/image";

export default function ImageCloudinary({ link, setLink }) {
  const { loanding, handleFile } = useImageCloudinary(setLink);

  return (
    <>
      {!link ? (
        <div className="rounded-md w-3/12 bg-blue-300 mt-4 flex justify-center items-center p-2">
          <input type="file" multiple onChange={handleFile} />
        </div>
      ) : null}

      {loanding ? (
        <h3 className="text-center font-semibold text-black text-xl mt-3">
          Loanding...
        </h3>
      ) : (
        link && (
          <div>
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
          <p className="text-2xl text-red-400 mb-6 font-bold">
            No Image Select
          </p>
        </div>
      )}
    </>
  );
}
