import { useUsers } from "@/hooks/useUsers";
import { ROUTES } from "@/util/constants";
import { DeleteIconItem, EditIconItem } from "../layout/IconsItem";
import Link from "next/link";

export default function UsersPost() {
  const { user, handleDelete } = useUsers();

  return (
    <>
      {user.length > 0 &&
        user.map((text) => (
          <div
            key={text._id}
            className="flex flex-col sm:gap-y-5 md:justify-between sm:justify-center items-center mt-10 text-xl p-3 bg-yellow-200 md:w-[40%] sm:w-[90%]
            mx-auto py-3 rounded-md"
          >
            {text.name ? (
              <span className="text-2xl font-bold text-green-900">
                {text.name}
              </span>
            ) : (
              <span className="text-2xl font-bold text-red-900">No Name</span>
            )}
            <h1 className="text-xl font-extrabold text-blue-900">
              {text.email}
            </h1>
            <div className="flex gap-x-4">
              <Link
                href={`${ROUTES.usersEdit}/${text._id}`}
                className="bg-orange-500 px-8 py-1 rounded-lg text-white"
              >
                <EditIconItem />
              </Link>
              <button
                onClick={() => handleDelete(text._id)}
                className="bg-red-200 px-8 py-1 rounded-lg text-white"
              >
                <DeleteIconItem />
              </button>
            </div>
          </div>
        ))}
    </>
  );
}
