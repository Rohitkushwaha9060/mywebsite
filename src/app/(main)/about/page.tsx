import Image from "next/image";

function About() {
  return (
    <>
      <section className="w-full max-w-7xl mt-12 mx-auto font-roboto h-screen">
        <h1 className="text-left font-roboto_slab font-semibold text-2xl md:text-3xl mx-5">
          About Me
        </h1>

        <div className="text-center max-w-[300px] mx-auto mt-10 ">
          <Image
            src="/l.png"
            alt="me"
            className="rounded-xl"
            width={300}
            height={300}
          />
        </div>

        <article className="mt-10 text-left mx-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          fugit, excepturi libero provident nihil magnam? Consequatur ut nulla
          porro molestiae beatae dolorem! In architecto, quos exercitationem
          magnam soluta tempore praesentium? Non molestiae aut nulla veritatis
          facere nemo, enim aperiam maxime. Molestiae porro placeat doloribus
          error. Odio ut cum dignissimos totam sit. Itaque delectus nisi sint
          consequuntur fuga minus quia, saepe ipsum labore, veritatis deleniti
          quae facere dolore incidunt dolorem dolores illum provident iusto
          expedita aspernatur eaque voluptas officiis. Cumque numquam odit omnis
          tenetur architecto quo a maiores. Cum voluptatem beatae, similique ad
          nobis culpa sapiente autem non nostrum distinctio assumenda.
        </article>
      </section>
    </>
  );
}

export default About;
