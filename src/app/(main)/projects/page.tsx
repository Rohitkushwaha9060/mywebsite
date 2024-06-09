import { Project } from "@/components/Project";

function Projects() {
  return (
    <section className="mt-12 mx-auto max-w-7xl my-5 h-screen">
      <h1 className="text-center font-roboto_slab font-semibold text-2xl md:text-3xl">
        My Projects
      </h1>
      <div className="flex flex-wrap gap-10 mt-8 mx-auto justify-center text-sm">
        <Project />
      </div>
    </section>
  );
}

export default Projects;
