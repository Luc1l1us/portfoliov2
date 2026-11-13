import Image from "next/image";
import Link from "next/link";
import Projects from "./components/projects";
import projects from "./data/projects";
import ProfileImage from "../assets/drawingpfp.png";
import Symph from "../assets/symph-logo.jpg";
import Taskbar from "./components/taskbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons/faClipboard";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    //Change hardcoded padding and margin to scale
    //Change into 3 flex rows and scale
    <div className="h-[100vh] sm:h-[100vh] md:h-[85vh] lg:h-[80vh] flex flex-row justify-items-start md:m-20 md:pr-30 rounded-lg border border-white shadow-[0_0_20px_rgba(0,0,0,0.15)] text-silver-700 gap-3">
      <Taskbar />
      {/*First Column (should redirect the user to what the user had clicked)*/}
      <div className="flex flex-col items-center first-column basis-1/3 font-ubuntu rounded-md bg-silver-100">
        {/* First part */}
        {/* profile pic and author's name and role */}
        <div className="profile-container flex items-center bg-silver-base rounded-md w-full">
          <div className="profile-image flex-none ">
            <Image src={ProfileImage} alt="Profile Image"></Image>
          </div>
          <div className="profile-text-container flex grow flex-col place-content-start ml-5">
            <p className="font-bold lg:text-base">Edzie Mari Navarra</p>
            <p className="lg:text-base">Software Developer</p>
          </div>
        </div>

        {/* Second part */}
        <div className="flex flex-col navigation gap-4 mt-3 bg-silver-base rounded-md w-full h-full">
          <div className="section-container-title lg:mt-6 lg:ml-6">Section</div>
          <div className="sections-container flex flex-col lg:ml-6 gap-1">
            <a
              href="#projects"
              className="ml-3 hover-navigation py-2 place-items-center rounded-md transition-all duration-200 hover:bg-gray-100/75"
            >
              <FontAwesomeIcon icon={faClipboard} className="mr-3" />
              projects
            </a>
            <a
              href="#experience"
              className="ml-3 hover-navigation py-2 place-items-center rounded-md transition-all duration-200 hover:bg-gray-100/75"
            >
              <FontAwesomeIcon icon={faRankingStar} className="mr-3" />
              experience
            </a>
            <a
              href="#about"
              className="ml-3 hover-navigation py-2 place-items-center rounded-md transition-all duration-200 hover:bg-gray-100/75"
            >
              <FontAwesomeIcon icon={faInfo} className="mr-3" />
              about
            </a>
            <a
              href="#contact"
              className="ml-3 hover-navigation py-2 place-items-center rounded-md transition-all duration-200 hover:bg-gray-100/75"
            >
              <FontAwesomeIcon icon={faAddressCard} className="mr-3" />
              contact
            </a>
          </div>
        </div>

        {/* Third part */}
        {/*  RESUME
        <div className="first-column-bottom mt-auto sm:flex-col">
          <div className="view-resume hover:text-silver-base">
            <Link
              href="/My_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faRightLong} />
              <span> View Resume</span>
            </Link>
          </div>
        </div>
        */}
      </div>

      {/*Second Column (should be scrollable)*/}
      <div className="second-column basis-2/3 font-ubuntu bg-silver-100">
        <div className="flex flex-col bg-silver-base rounded-md w-full">
          <p className="font-doto text-2xl ml-6">GREETINGS!</p>
          <p className="ml-6">My Name is Edzie Mari Navarra</p>
          <div className="description font-bold text-2xl ml-6">
            Passionate about <span className="text-gray-300">designing</span>{" "}
            and <span className="text-gray-200">developing </span>
            apps that <span className="text-gray-400">help people </span>
            and <span className="text-gray-400"> bring ideas </span> to life.
          </div>
        </div>
        <section
          id="projects"
          className="projects-container mt-3 bg-silver-base rounded-md"
        >
          <div className="projects-title m-6">projects</div>
          {projects.map((project) => (
            <Projects key={project.projname} {...project} />
          ))}
        </section>
        <section
          id="experience"
          className="experience-container bg-silver-base mt-3 rounded-md"
        >
          <p className="experience-title ml-6">experience</p>
          <div className="flex ml-6 mt-3 h-full">
            <div className="first-experience-logo">
              <Image
                className="mr-15 rounded-lg drop-shadow-lg"
                src={Symph}
                width={40}
                height={40}
                alt="Symph company logo"
                unoptimized
              />
            </div>
            <div>
              <div className="bold-title">
                Symph (Software Developer Intern/QA Automation Tester)
              </div>
              <p className="description">
                Played a dual-role in a client deployment project—developing
                features and resolving bugs before leading QA automation efforts
                with Cypress to enhance test coverage and overall product
                stability.
              </p>
            </div>
          </div>
        </section>
        <section id="about" className="about-container mt-15">
          <p className="about-title ">about</p>
          <p className="mt-5">
            I’m a software developer passionate about building systems that are
            both technically robust and thoughtfully designed. I enjoy working
            across the stack—from architecting backend APIs and automation
            pipelines to crafting clean, responsive user interfaces. My projects
            range from cross-platform desktop applications and algorithm-driven
            simulations to full-stack mobile apps integrating real-time
            financial data. I’m especially interested in system design,
            performance optimization, and writing maintainable, scalable code.
            I'm continuously improving workflows, automating processes if
            possible, and turning complex problems into clean, reliable
            solutions.
          </p>
        </section>
        <section id="contact" className="contact-container mt-15 mb-10">
          <p className="contact-title">contact</p>
          <div className="mt-5">
            I’m always open to discussing new opportunities, collaborations, or
            interesting technical problems. Whether it's software engineering,
            automation, systems work, or full-stack development. Please feel
            free to reach out.
            <p>📧 Email: edziemarin@gmail.com </p>
            <p>💼 LinkedIn: linkedin.com/in/edz-navarra</p>
            <p>💻 GitHub: github.com/Luc1l1us</p>
          </div>
        </section>
        {/*2nd column should be scrollable*/}
      </div>
    </div>
  );
}
