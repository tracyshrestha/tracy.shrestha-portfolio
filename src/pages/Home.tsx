import Projects from "./sections/projects/Projects";
import Skills from "./sections/Skills";
import Intro from "../components/Introduction/Intro";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/ExperienceNew";
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

      <div className="py-10">
        <Skills />
      </div>
      <div className="pt-8 pb-12">
        <Projects />
      </div>
      {/* <div className="py-10">
        <Contact />
      </div> */}
    </div>
  );
}

export default Home;
