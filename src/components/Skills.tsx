import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoSass } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";
import { SiReactquery } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoDocker } from "react-icons/io5";
import { TbBrandMysql } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { TbBrandPrisma } from "react-icons/tb";
import { GiPolarBear } from "react-icons/gi";
import { SiAxios } from "react-icons/si";

export function Skills() {
  return (
    <section className="mt-12 mx-auto max-w-7xl my-5">
      <h1 className="text-center font-roboto_slab font-semibold text-2xl md:text-3xl">
        My Skills
      </h1>
      <div className="flex flex-wrap gap-10 mt-8 mx-auto justify-center text-sm px-2">
        {/* HTML */}
        <div className="group relative flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-orange-600 w-32 h-32">
          <TiHtml5 size={65} className="animate-spin" />
          <span className="font-semibold font-roboto_slab">HTML5</span>
          {/* <div className="w-full bg-slate-500 rounded-full h-4">
              <div
                className="bg-green-600 h-4 rounded-full progress-bar"
                style={{ width: "80%" }}
              ></div>
            </div> */}
          {/* <span className="absolute -top-6 scale-0 rounded bg-white p-2 text-sm text-green-600 group-hover:scale-100 font-semibold transition duration-300 ease-in-out">
              80%
            </span> */}
        </div>
        {/* css */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-blue-600 w-32 h-32">
          <FaCss3 size={65} className="animate-spin" />
          <span className="font-semibold font-roboto_slab">CSS3</span>
        </div>
        {/* sass */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-red-600 w-32 h-32">
          <IoLogoSass size={65} className="animate-spin" />
          <span className="font-semibold font-roboto_slab">SCSS</span>
        </div>
        {/* bootstrap */}
        <div className=" flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-blue-700 w-32 h-32">
          <FaBootstrap size={65} className="animate-spin" />
          <span className="font-semibold font-roboto_slab">BOOTSTRAP</span>
        </div>
        {/* tailwind */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-[#38bdf8] w-32 h-32">
          <SiTailwindcss size={65} className="animate-spin" />
          <span className="font-semibold font-roboto_slab">TAILWIND</span>
        </div>
        {/* js */}
        <div className=" flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-yellow-600 w-32 h-32">
          <IoLogoJavascript size={65} className="animate-spin" />
          <span className="font-semibold font-roboto_slab">JAVASCRIPT</span>
        </div>
        {/* ts */}
        <div className="flex flex-col gap-3 p-3 bg-blue-700 rounded-xl items-center text-white w-32 h-32">
          <BiLogoTypescript size={65} className="animate-spin" />
          <span className="font-semibold font-roboto_slab">TYPESCRIPT</span>
        </div>
        {/* react */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-blue-600 w-32 h-32">
          <FaReact size={65} className="animate-spin-full" />
          <span className="font-semibold font-roboto_slab">REACT</span>
        </div>
        {/* axios */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-blue-500 w-32 h-32">
          <SiAxios size={65} className="animate-spin-full" />
          <span className="font-semibold font-roboto_slab">AXIOS</span>
        </div>
        {/* react query */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-orange-500 w-32 h-32">
          <SiReactquery size={65} className="animate-spin-full" />
          <span className="font-semibold font-roboto_slab">REACT QUERY</span>
        </div>
        {/* react redux */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-blue-600 w-32 h-32">
          <TbBrandRedux size={65} className="animate-spin-full" />
          <span className="font-semibold font-roboto_slab">REDUX TOOL</span>
        </div>
        {/* Zustand */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-slate-600 w-32 h-32">
          <GiPolarBear size={65} className="animate-spin" />
          <span className="font-semibold font-roboto_slab">ZUSTAND</span>
        </div>
        {/* next js */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-gray-600 w-32 h-32">
          <SiNextdotjs size={65} className="animate-spin" />
          <span className="font-semibold font-roboto_slab">NEXT JS</span>
        </div>
        {/* express */}
        <div className="group relative flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-black w-32 h-32">
          <SiExpress size={65} className="animate-spin" />
          <span className="font-semibold font-roboto_slab">EXPRESS JS</span>
        </div>
        {/* socket io */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-gray-600 w-32 h-32  relative group">
          <TbBrandSocketIo size={65} className="animate-spin-full" />
          <span className="font-semibold font-roboto_slab">SOCKET IO</span>
        </div>
        {/* Mysql */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-blue-900 w-32 h-32  relative group">
          <TbBrandMysql size={65} className="animate-spin" />
          <span className="font-semibold font-roboto_slab">MY SQL</span>
        </div>
        {/* PG SQL */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-blue-900 w-32 h-32  relative group">
          <SiPostgresql size={65} className="animate-spin" />
          <span className="font-semibold font-roboto_slab">POSTGRES</span>
        </div>
        {/* Prisma */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-slate-800 w-32 h-32  relative group">
          <TbBrandPrisma size={65} className="animate-spin" />
          <span className="font-semibold font-roboto_slab">PRISMA</span>
        </div>
        {/* MongoDB */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-green-800 w-32 h-32  relative group">
          <SiMongodb size={65} className="animate-spin" />
          <span className="font-semibold font-roboto_slab">MONGODB</span>
        </div>
        {/* Mongoose */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-[#A03333] w-32 h-32  relative group">
          <SiMongoose size={65} className="animate-spin" />
          <span className="font-semibold font-roboto_slab">MONGOOSE</span>
        </div>
        {/* Docker */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl items-center text-blue-600 w-32 h-32  relative group">
          <IoLogoDocker size={65} className="animate-spin" />
          <span className="font-semibold font-roboto_slab">DOCKER</span>
        </div>
      </div>
    </section>
  );
}
