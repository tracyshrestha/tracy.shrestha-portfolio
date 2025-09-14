import Work from "./sections/projects/Work";
import Skills from "./sections/Skills";
import Intro from "../components/Introduction/Intro";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/ExperienceNew";
// import Contact from "./sections/Contact";

function Home() {
  return (
    <div className="h-full bg-black w-screen">
      <div className="h-lvh">
        <Intro />
      </div>
      <div className="py-10">
        <About />
      </div>
      <div className="lg:w-full flex flex-col lg:flex-row  lg:justify-around py-10 ">
        <div className="">
          <Education />
        </div>
        <div className="">
          <Experience />
        </div>
      </div>

      <div className="pb-10">
        <Skills />
      </div>
      <div className="pb-10">
        <Work />
      </div>
      {/* <div className="py-10">
        <Contact />
      </div> */}
    </div>
  );
}

export default Home;
