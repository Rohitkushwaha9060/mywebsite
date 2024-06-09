import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";
import { FiTag } from "react-icons/fi";
import { Project } from "@/components/Project";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <section className="mt-12 mx-auto max-w-7xl my-5 h-auto">
      <h1 className="text-left font-roboto_slab font-semibold text-2xl md:text-3xl px-5">
        My Projects - {params.slug}
      </h1>

      <div className="flex flex-wrap my-5 gap-10 font-roboto font-light px-5">
        <p className="flex items-center gap-3">
          <FaRegClock size={20} /> july 26, 2022
        </p>

        <p className="flex items-center gap-3">
          <FiTag size={20} /> Web Development
        </p>
      </div>

      <div className="flex flex-wrap my-5 gap-10">
        <Image
          src="/l.png"
          alt="Logo"
          width={400}
          height={400}
          className="rounded-lg mx-auto shadow-md"
        />
        <Image
          src="/l.png"
          alt="Logo"
          width={400}
          height={400}
          className="rounded-lg mx-auto shadow-md"
        />

        <Image
          src="/l.png"
          alt="Logo"
          width={400}
          height={400}
          className="rounded-lg mx-auto shadow-md"
        />
      </div>

      <div className="my-5 flex flex-wrap gap-10 px-5">
        <div className="max-w-sm">
          <h1 className="text-2xl font-semibold my-3  font-roboto_slab">
            About Client
          </h1>
          <ul className="flex flex-col gap-2 text-lg font-normal">
            <li>Name: John Doe</li>
            <li>Service: UI Design & Frontend Development</li>
            <li>Website: https://company.com</li>
          </ul>
        </div>
        <div className="max-w-sm">
          <h1 className="text-2xl font-semibold my-3 font-roboto_slab">
            Objective
          </h1>
          <p className=" text-lg font-normal text-wra">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas
            ipsa accusamus veniam.
          </p>
        </div>
        <div className="max-w-sm">
          <h1 className="text-2xl font-semibold my-3  font-roboto_slab">
            Tools & Technologies
          </h1>
          <p className=" text-lg font-normal text-wra">
            HTML, CSS, JavaScript, Vue.js, TailwindCSS, AdobeXD
          </p>
        </div>
      </div>
      <div className="px-5">
        <h1 className="text-2xl font-semibold my-3  font-roboto_slab">
          Challenge
        </h1>
        <article className="text-lg font-normal text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          voluptate minima nisi fugiat modi cupiditate veniam! Vitae eos enim
          fuga debitis dolorem nobis architecto cumque facere quia quos sapiente
          voluptatibus illo, earum nam maxime! Perferendis hic, id molestias
          vitae est laudantium molestiae voluptatibus. Quam, cupiditate beatae
          similique, aut, laudantium qui velit odit necessitatibus modi soluta
          numquam voluptate amet suscipit nobis tempore quis. Quia quas,
          necessitatibus sunt doloremque officia eum perferendis debitis iusto
          excepturi eveniet vitae praesentium hic quaerat earum beatae ab magni
          tempore perspiciatis a sit, voluptates adipisci, quod modi? Debitis
          omnis, beatae aut quibusdam ullam ducimus dolor sed possimus. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Id qui aliquid
          accusantium ad tempore atque excepturi repudiandae iure numquam
          repellendus doloremque assumenda, delectus illo porro expedita minima,
          veritatis dignissimos ab architecto sapiente ducimus mollitia
          molestias perferendis. Totam corporis ullam aut! Obcaecati magni illum
          blanditiis culpa iste officia laboriosam exercitationem, odit itaque,
          quis illo suscipit excepturi et sapiente cupiditate amet reiciendis.
          Nihil aspernatur facilis eius nulla repudiandae ab hic eligendi ut
          ratione velit iure, cumque sapiente esse dicta doloribus unde
          voluptate. Porro natus, sequi consequuntur veritatis eveniet nesciunt!
          Blanditiis excepturi, aliquid rerum itaque autem, nam saepe quidem
          ipsam dolor facere harum unde voluptas? Facere, sequi! Suscipit totam
          quo dignissimos autem enim aperiam magni quidem sint eligendi, beatae,
          consequatur officia. Provident dolorem quisquam vitae quos illo? Hic,
          nam? Placeat exercitationem sapiente vero quis a similique amet
          aspernatur qui rerum voluptate est quia dolores provident nemo
          excepturi cum dolore tempora, tenetur repellendus. Sint eius explicabo
          voluptates. Quia animi rerum voluptas, cupiditate nisi fuga impedit
          corrupti, accusantium dolorem velit vel? Nihil voluptates nobis
          blanditiis, eum cum unde perferendis cupiditate expedita dignissimos
          sunt reiciendis animi doloribus maxime consequuntur quibusdam sequi
          repellendus a voluptatibus veniam, quis officiis in dolorem! Sed,
          maxime aut nobis fugit animi quo alias ipsam optio error iste
          consectetur necessitatibus voluptatum distinctio molestiae
          reprehenderit nam voluptas non accusantium? Pariatur voluptatem cum
          alias amet minus ducimus magni odit nam debitis quos? Atque vitae
          veritatis ad distinctio eius ratione placeat repellat nam itaque autem
          temporibus libero ipsam consequuntur modi consectetur in velit nisi
          alias ducimus, debitis tempora excepturi optio numquam? Corrupti earum
          impedit inventore ratione consequatur quasi, nesciunt eius tempora
          voluptatibus voluptatem. Minus eum ratione excepturi blanditiis
          dolorum odio eos vel incidunt repellat suscipit et molestias delectus,
          voluptatibus distinctio cum. Porro, possimus amet non sint quia omnis
          totam. Voluptate assumenda iure fugiat ipsam quisquam ex veritatis ad
          iusto maxime et dolor minima laudantium officiis id officia
          recusandae, odit ullam. Quia voluptatibus praesentium laborum aliquam
          quos neque facilis nihil vel, molestiae, esse eius maiores minima
          sapiente saepe modi? Accusamus fugiat ex reiciendis veritatis saepe
          dolorum voluptatibus fuga consequuntur aliquid? Eos unde saepe nemo
          maiores earum eaque eius vel distinctio reiciendis voluptas fugiat
          accusamus, enim dicta tempore praesentium? Expedita, deleniti illum
          nam fuga quae praesentium omnis quidem dignissimos, ducimus cupiditate
          dolorem maxime, doloribus vel! Corrupti natus beatae officiis nobis
          corporis ratione nisi eligendi quis ex est harum, nostrum sit maxime
          repellendus cupiditate odio rerum repudiandae voluptatum blanditiis
          aut soluta similique libero. Officiis sunt aperiam est dolorum, in
          molestias sapiente, quaerat voluptas architecto deserunt voluptate
          dignissimos provident. Molestiae sit, exercitationem nam, velit quos
          magni earum tempore, autem facilis voluptates unde sed nulla
          voluptatem odio magnam reiciendis fugiat ad vitae tempora? Voluptatum
          quae vel dignissimos delectus officia quas repellendus, ipsam
          assumenda illo eligendi maxime eius, est, nemo eum iusto enim!
          Perferendis eum numquam adipisci odit! Necessitatibus odio placeat
          perspiciatis voluptas quasi amet? Enim quasi cumque vitae, accusamus
          nobis eos laudantium nostrum magnam eligendi cupiditate. Quibusdam,
          similique quos! Cumque odit suscipit est excepturi saepe nulla quia
          iusto illo odio dolor.
        </article>
      </div>

      <hr className="my-10"></hr>
      <h1 className="text-left font-roboto_slab font-medium text-2xl  px-5">
        Related Projects
      </h1>
      <div className="flex flex-wrap gap-10 mt-8 mx-auto justify-center text-sm">
        <Project />
      </div>
    </section>
  );
}
