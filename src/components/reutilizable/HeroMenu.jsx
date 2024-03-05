import { CartIcon } from "./Icons";

export default function HeroMenu() {
  return (
    <section className="relative top-28 bg-gray-800">
      <div className="md:mt-0.5 sm:mt-7 xl:grid xl:grid-cols-2 flex flex-col justify-center items-center sm:mb-20">
        <div className="sm:text-center font-semibold text-gray-300 md:relative md:-top-8">
          <h1 className="text-4xl font-bold text-red-600">Mackbook Pro 14</h1>
          <div className="md:max-w-2xl sm:max-w-sm sm:mx-auto md:pl-3 sm:mt-4">
            <p>
              Welcome to Lorem Ipsum, your ultimate culinary destination where
              passion for food meets excellence in service. Located in the heart
              of Lorem Mejico, our restaurant invites you to enjoy a unique
              gastronomic experience that will delight all your senses.
            </p>
          </div>
          <div className="text-white text-lg mt-4 flex justify-center gap-x-10">
            <button className="border-[1px] border-white px-7 hover:transition hover:scale-105">
              Read More
            </button>
            <button className="border-[1px] border-white py-1  hover:transition hover:scale-105">
              Add To Cart
              <CartIcon />
            </button>
          </div>
        </div>
        <img
          src="images/headerRestaurant.avif"
          className="xl:w-[500px] md:w-[600px] md:pl-3 sm:w-[300px] rounded-xl"
          alt="Photo Header"
        ></img>
      </div>
    </section>
  );
}
