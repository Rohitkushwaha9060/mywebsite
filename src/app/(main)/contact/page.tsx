"use client";
import { SiNamecheap } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/schema";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: any) => {
    setIsLoading(true);
    axios
      .post("/api/contact", data)
      .then((res) => {
        toast.success("Contact added successfully");
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      <section className="w-full max-w-7xl mt-12 mx-auto font-roboto h-screen">
        <div className="max-w-2xl mx-auto mt-3">
          <form
            className="space-y-6 shadow-md rounded-lg bg-gray-900 p-6 mx-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="text-center">
              <h1 className="text-xl font-semibold font-roboto_slab">
                Contact Details
              </h1>
              <p className="text-sm font-medium text-gray-400 ">
                Fill in the details below to get in touch with me.
              </p>
              <div className="mt-5 flex flex-col items-center justify-center gap-3 text-gray-400 animate-bounce">
                <p className="flex items-center justify-center gap-2">
                  <SiNamecheap size={20} /> Rohit Kushwaha
                </p>
                <p className="flex items-center justify-center gap-2">
                  <MdEmail size={20} /> rajdilkhsu0987654321@gmail.com
                </p>
                <p className="flex items-center justify-center gap-2">
                  <FaPhone size={20} /> 9060444206
                </p>
              </div>
            </div>

            {/* name */}
            <div className="mb-4 relative">
              <input
                {...register("name")}
                type="text"
                name="name"
                placeholder="Name"
                className="mt-1 block w-full px-3 py-2 bg-gray-950 rounded-md shadow-sm focus:outline-none pl-11"
              />
              <div
                className={`${
                  errors.name && "bottom-6"
                }  absolute inset-y-0 left-0  flex items-center pl-3 pointer-events-none text-white`}
              >
                <SiNamecheap size={24} className="animate-bounce_two" />
              </div>
              {errors?.name && (
                <span className="text-red-500 text-xs italic mt-2 ">
                  {errors?.name?.message}
                </span>
              )}
            </div>

            {/* email */}
            <div className="mb-4 relative">
              <input
                {...register("email")}
                type="text"
                name="email"
                placeholder="Email"
                className="mt-1 block w-full px-3 py-2 bg-gray-950 rounded-md shadow-sm focus:outline-none pl-11"
              />
              <div
                className={`${
                  errors.email && "bottom-6"
                }  absolute inset-y-0 left-0  flex items-center pl-3 pointer-events-none text-white`}
              >
                <MdEmail size={24} className="animate-bounce_two" />
              </div>
              {errors?.email && (
                <span className="text-red-500 text-xs italic mt-2 ">
                  {errors?.email?.message}
                </span>
              )}
            </div>

            {/* phone */}
            <div className="mb-4 relative">
              <input
                {...register("phone")}
                type="text"
                name="phone"
                placeholder="Phone"
                className="mt-1 block w-full px-3 py-2 bg-gray-950 rounded-md shadow-sm focus:outline-none pl-11"
              />
              <div
                className={`${
                  errors.phone && "bottom-6"
                }  absolute inset-y-0 left-0  flex items-center pl-3 pointer-events-none text-white`}
              >
                <FaPhone size={24} className="animate-bounce_two" />
              </div>
              {errors?.phone && (
                <span className="text-red-500 text-xs italic mt-2 ">
                  {errors?.phone?.message}
                </span>
              )}
            </div>

            {/* message */}
            <div className="mb-4">
              <textarea
                {...register("message")}
                name="message"
                placeholder="Message"
                className="mt-1 block w-full px-3 py-2 bg-gray-950 rounded-md shadow-sm focus:outline-none"
              />
              {errors?.message && (
                <span className="text-red-500 text-xs italic mt-2 ">
                  {errors?.message?.message}
                </span>
              )}
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="animate-fade w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isLoading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
