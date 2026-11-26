"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import useDarkMode from "./darkmode";
import Link from "next/link";
import LiveClock from "./liveclock";

export default function Taskbar() {
  const { isDark, toggleDarkMode } = useDarkMode();
  return (
    <div className="flex flex-col gap-2 bg-silver-100 dark:bg-black dark:text-white">
      <div className="flex flex-col items-start window-column hover:bg-silver-200 bg-silver-base dark:bg-black-100 dark:border dark:border-white dark:hover:bg-[#4c4c4c] p-2 rounded-md">
        {/* dark mode button here*/}
        <button
          className="dark-light-button group relative flex items-center justify-center p-2 rounded-md transition-all duration-200 hover:bg-gray-100/75"
          onClick={toggleDarkMode}
        >
          <span className="opacity-0 group-hover:opacity-100 absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-black transition-all duration-200 group-hover:h-8" />
          <span className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
            {isDark ? "Light Mode" : "Night Mode"}
          </span>
          <FontAwesomeIcon
            className="socials flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ease-out hover:bg-gray-100/75 hover:scale-110 active:scale-95"
            icon={isDark ? faSun : faMoon}
            style={{
              color: isDark
                ? "rgba(255, 255, 255, 1.00)"
                : "rgba(0, 0, 0, 1.00)",
            }}
          />
        </button>

        <hr className="border-[#6e6e6e] px-5 ml-1 my-3 h-0.1 border-t-5" />
        {/* Put time here */}
        <LiveClock />
      </div>
      <div className="flex flex-col items-center justify-center font-doto font-bold whitespace-nowrap bg-silver-base p-2 rounded-md h-full dark:bg-black-100 dark:border dark:border-white">
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

      <div className="flex flex-col items-start window-column hover:bg-silver-200 bg-silver-base p-3 rounded-md dark:bg-black-100 dark:border dark:border-white">
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
              style={{
                color: isDark
                  ? "rgba(255, 255, 255, 1.00)"
                  : "rgba(0, 0, 0, 1.00)",
              }}
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
              style={{
                color: isDark
                  ? "rgba(255, 255, 255, 1.00)"
                  : "rgba(0, 0, 0, 1.00)",
              }}
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
              style={{
                color: isDark
                  ? "rgba(255, 255, 255, 1.00)"
                  : "rgba(0, 0, 0, 1.00)",
              }}
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
              style={{
                color: isDark
                  ? "rgba(255, 255, 255, 1.00)"
                  : "rgba(0, 0, 0, 1.00)",
              }}
            />
          </button>
        </a>
      </div>
    </div>
  );
}
