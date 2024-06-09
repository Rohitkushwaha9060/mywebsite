import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

export function Footer() {
  return (
    <footer className=" bg-gray-950 text-white mt-20 text-center font-semibold text-lg py-3 max-w-7xl mx-auto my-auto">
      <hr className="w-full h-px bg-gray-900" />
      <h3 className="my-3">Connect with me</h3>
      <div className="flex flex-warp gap-8  items-center justify-center max-w-lg mx-auto px-3">
        <a href="https://github.com/rohitkushwaha9060" target="_blank">
          <FaGithubSquare size={35} />
        </a>
        <a href="https://www.linkedin.com/in/rohitk26" target="_blank">
          <FaLinkedin size={35} />
        </a>
        <a href="https://github.com/rohitkushwaha9060" target="_blank">
          <BsTwitterX size={35} />
        </a>
        <a href="https://www.instagram.com/rohit_26_07" target="_blank">
          <FaSquareInstagram size={35} />
        </a>
      </div>
      <p className="my-4"> © 2022 ❤️ Rohit Kushwaha </p>
    </footer>
  );
}
