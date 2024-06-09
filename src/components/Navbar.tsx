"use client";
import { useState } from "react";

import Link from "next/link";
import { RiMenu2Fill } from "react-icons/ri";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-5 py-6 bg-gray-950 text-white sticky top-0 z-50 w-full">
        <div className="flex items-center font-poppins gap-2 font-semibold">
          <RiMenu2Fill
            size={24}
            cursor={"pointer"}
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
          <Link href="/" className="cursor-pointer mx-3">
            <span className=" rounded-md p-0 text-blue-600 text-3xl font-roboto_slab font-bold">
              R
            </span>
            <span className="font-semibold text-xl">ohit</span>
          </Link>
        </div>
        <nav className="hidden md:flex md:space-x-10 font-roboto font-medium">
          <Link href="/" className="hover-animate-wiggle">
            Home
          </Link>
          <Link className="hover-animate-wiggle" href="/projects">
            Projects
          </Link>
          <Link className="hover-animate-wiggle" href="/blogs">
            Blogs
          </Link>
          <Link className="hover-animate-wiggle" href="/about">
            About
          </Link>
          <Link className="hover-animate-wiggle" href="/contact">
            Contact
          </Link>
        </nav>

        {/* mobile nav view */}
        <nav
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isOpen ? "block" : "hidden"
          }  md:hidden z-50 absolute top-[60px] right-0  w-full bg-gray-950 text-white px-5 min-h-52 duration-100 ease-in-out`}
        >
          <div className="flex flex-col py-4 items-center font-roboto font-medium gap-6">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        <div className="flex items-center font-roboto_slab animate-bounce_two">
          <Link
            href="/"
            className="bg-purple-700 py-1 px-4 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-purple-900"
          >
            Sign In
          </Link>
        </div>
      </header>
    </>
  );
}
