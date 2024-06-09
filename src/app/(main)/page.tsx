import { Hero, Skills, Project } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <section className="mt-12 mx-auto max-w-7xl my-5">
        <h1 className="text-center font-roboto_slab font-semibold text-2xl md:text-3xl">
          My Projects
        </h1>
        <div className="flex flex-wrap gap-10 mt-8 mx-auto justify-center text-sm">
          <Project />
        </div>
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="text-center font-roboto_slab font-semibold border p-3 border-blue-500  hover:border-blue-700 rounded-lg transition duration-300 transform"
          >
            View All Projects
          </Link>
        </div>
      </section>
    </>
  );
}
