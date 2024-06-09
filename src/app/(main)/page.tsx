import Image from "next/image";
import { MdOutlineArrowCircleDown } from "react-icons/md";

export default function Home() {
  return (
    <>
      <section className="flex flex-col lg:flex-row gap-10 items-center justify-between mx-auto w-full p-5 mt-8 max-w-7xl">
        <div className="text-center">
          <h1 className="animate-fade font-roboto_slab font-semibold text-2xl md:text-3xl">
            Hi, I Am <span>Rohit Kushwaha</span>
          </h1>
          <h3 className="font-medium mt-4 text-md md:text-lg typewriter font-roboto">
            A Full-Stack Developer & Tech Enthusiast
          </h3>

          <div className="flex justify-center mt-12">
            <button className="animate-spin bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md  flex items-center gap-1 transition duration-300 transform hover:scale-105">
              <MdOutlineArrowCircleDown size={24} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
        <div>
          <Image
            priority={false}
            className="animate-bounce"
            src="/dev.svg"
            alt="profile"
            width={800}
            height={600}
          />
        </div>
      </section>

      <section className="w-full max-w-7xl mt-12 mx-auto ">
        <h1 className="text-center font-roboto_slab font-semibold text-2xl md:text-3xl">
          About Me
        </h1>
      </section>
    </>
  );
}
