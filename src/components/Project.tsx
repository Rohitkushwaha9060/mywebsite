import Image from "next/image";
import Link from "next/link";

export function Project() {
  return (
    <Link
      href={`/projects/${"project-1"}`}
      className="rounded-lg text-white shadow-md mx-2 bg-gray-600  max-w-sm hover-animate-wiggle"
    >
      <Image
        src="/l.png"
        alt="Logo"
        width={400}
        height={400}
        className="rounded-t-lg mx-auto w-full"
      />
      <div className="my-4 text-center">
        <h2 className="text-2xl font-semibold text-wrap my-2">Project Name</h2>
        <p className="text-md font-semibold">Web Development</p>
      </div>
    </Link>
  );
}
