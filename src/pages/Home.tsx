import Projects from "./sections/projects/Projects";
import ProjectSwiper from "./sections/projects/ProjectSwiper";
import NewSkills from "./sections/skills/SkillsMarquee";
import Intro from "../components/Introduction/Intro";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/ExperienceCard";
// import Contact from "./sections/Contact";

function Home() {
  return (
    <div className="h-full bg-black ">
      <div className="h-lvh">
        <Intro />
      </div>
      <div className="pt-10">
        <About />
      </div>
      <div className="lg:w-full flex flex-col md:flex-row  md:justify-around  ">
        <div className="md:w-1/2 w-full">
          <Education />
        </div>
        <div className="md:w-1/2 w-full">
          <Experience />
        </div>
      </div>

      <div className="py-10 ">
        <NewSkills />
      </div>
      <div className="pt-3 pb-12 lg:hidden block">
        <Projects />
      </div>
      <div className="pt-2 pb-12 hidden lg:block">
        <ProjectSwiper />
      </div>
    </div>
  );
}

export default Home;
