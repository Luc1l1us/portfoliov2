import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export default function Taskbar() {
  return (
    <div className="flex flex-col items-start window-column hover:bg-silver-200 bg-silver-base p-3 rounded-l-lg">
      <button className="flex first-button mb-2 ml-3 mt-2 w-4 h-4 bg-silver-100 rounded-full"></button>
      <button className="flex second-button mb-2 ml-3 mt-2 w-4 h-4 bg-silver-300 rounded-full"></button>
      <button className="flex third-button mb-2 ml-3 mt-2 w-4 h-4 bg-silver-700 rounded-full"></button>

      <div className="flex flex-1 space-x-2 items-center justify-center w-10 h-6 font-doto font-bold rotate-90 whitespace-nowrap">
        <span>p</span>
        <span>o</span>
        <span>r</span>
        <span>t</span>
        <span>f</span>
        <span>o</span>
        <span>l</span>
        <span>i</span>
        <span>o</span>
      </div>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="/My_Resume.pdf"
        className="group relative flex items-center justify-center p-2 rounded-md transition-all duration-200 hover:bg-gray-100/75"
      >
        <span className="opacity-0 group-hover:opacity-100 absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-black transition-all duration-200 group-hover:h-8" />
        <button className="flex w-6 h-6">
          <span className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
            Resume
          </span>

          <FontAwesomeIcon
            className="socials flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ease-out hover:bg-gray-100/75 hover:scale-110 active:scale-95"
            icon={faFile}
          />
        </button>
      </Link>
      <a
        target="_blank"
        href="https://github.com/Luc1l1us"
        className="group relative flex items-center justify-center p-2 rounded-md transition-all duration-200 hover:bg-gray-100/75"
      >
        <span className="opacity-0 group-hover:opacity-100 absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-black transition-all duration-200 group-hover:h-8" />
        <button className="flex w-6 h-6">
          <span className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
            GitHub
          </span>

          <FontAwesomeIcon
            className="socials flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ease-out hover:bg-gray-100/75 hover:scale-110 active:scale-95"
            icon={faGithub}
          />
        </button>
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/edz-navarra/"
        className="group relative flex items-center justify-center p-2 rounded-md transition-all duration-200 hover:bg-gray-100/75"
      >
        <button className="flex w-6 h-6">
          <span className="opacity-0 group-hover:opacity-100 absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-black transition-all duration-200 group-hover:h-8" />
          <span className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
            LinkedIn
          </span>
          <FontAwesomeIcon
            className="socials flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ease-out hover:bg-gray-100/75 hover:scale-110 active:scale-95"
            icon={faLinkedinIn}
          />
        </button>
      </a>
      <a
        aria-label="Send me an email"
        href="mailto:edziemarin@gmail.com?subject=Porfolio Inquiry"
        className="group relative flex items-center justify-center p-2 rounded-md transition-all duration-200 hover:bg-gray-100/75"
      >
        <button className="flex w-6 h-6 mt-auto">
          <span className="opacity-0 group-hover:opacity-100 absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-black transition-all duration-200 group-hover:h-8" />
          <span className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
            Email
          </span>
          <FontAwesomeIcon
            className="socials flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ease-out hover:bg-gray-100/75 hover:scale-110 active:scale-95"
            icon={faEnvelope}
          />
        </button>
      </a>
    </div>
  );
}
