import Image from "next/image";
import Projects from "./components/projects";
import projects from "./data/projects";
import Experience from "./components/experience";
import experience from "./data/experience";
import Sections from "./components/sections";
import sections from "./data/section";
import ProfileImage from "../assets/drawingpfp.png";
import Taskbar from "./components/taskbar";
import Container from "./components/container";

export default function Home() {
  return (
    <div className="h-[100vh] sm:h-[100vh] md:h-[85vh] lg:h-[80vh] flex flex-row justify-items-start md:m-20 rounded-lg border border-white shadow-[0_0_20px_rgba(0,0,0,0.15)] text-silver-700 gap-3">
      <Taskbar />
      <div className="flex flex-col items-center first-column basis-1/3 font-ubuntu rounded-md bg-silver-100">
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
        <Container
          containername="section"
          className="flex flex-col navigation gap-4 mt-3 bg-silver-base rounded-md w-full h-full"
        >
          {sections.map((section) => (
            <Sections key={section.sectionname} {...section} />
          ))}
        </Container>
      </div>

      {/*Second Column (should be scrollable)*/}
      <div className="flex flex-col second-column basis-2/3 font-ubuntu bg-silver-100">
        <Container
          containername=""
          className="flex flex-col bg-silver-base rounded-md w-full"
        >
          <p className="font-doto text-2xl ml-6 mt-6">GREETINGS!</p>
          <p className="ml-6">My Name is Edzie Mari Navarra</p>
          <div className="description font-bold text-2xl ml-6 mb-6">
            Passionate about <span className="text-gray-300">designing</span>{" "}
            and <span className="text-gray-200">developing </span>
            apps that <span className="text-gray-400">help people </span>
            and <span className="text-gray-400"> bring ideas </span> to life.
          </div>
        </Container>

        <Container containername="projects">
          {projects.map((project) => (
            <Projects key={project.projname} {...project} />
          ))}
        </Container>

        <Container containername="experience">
          {experience.map((exp) => (
            <Experience key={exp.companyname} {...exp} />
          ))}
        </Container>

        <Container containername="about">
          I’m a software developer passionate about building systems that are
          both technically robust and thoughtfully designed. I enjoy working
          across the stack—from architecting backend APIs and automation
          pipelines to crafting clean, responsive user interfaces. My projects
          range from cross-platform desktop applications and algorithm-driven
          simulations to full-stack mobile apps integrating real-time financial
          data. I’m especially interested in system design, performance
          optimization, and writing maintainable, scalable code. I'm
          continuously improving workflows, automating processes if possible,
          and turning complex problems into clean, reliable solutions.
        </Container>

        <Container containername="contact">
          I’m always open to discussing new opportunities, collaborations, or
          interesting technical problems. Whether it's software engineering,
          automation, systems work, or full-stack development. Please feel free
          to reach out.
          <p>📧 Email: edziemarin@gmail.com </p>
          <p>💼 LinkedIn: linkedin.com/in/edz-navarra</p>
          <p>💻 GitHub: github.com/Luc1l1us</p>
        </Container>
      </div>

      {/* Third column here */}
      <div className="flex flex-col second-column basis-1/5 font-ubuntu bg-silver-100 w-full h-full">
        <Container
          containername="github"
          className="flex flex-col bg-silver-base rounded-md w-full h-full"
        >
          Latest development activity
        </Container>
      </div>
    </div>
  );
}
