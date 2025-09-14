import Work from "./sections/projects/Work";
import Skills from "./sections/Skills";
import Intro from "../components/Introduction/Intro";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
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
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="py-10">
          <Education />
        </div>
        <div className="py-10">
          <Experience />
        </div>
      </div>

      <div className="py-10">
        <Skills />
      </div>
      <div className="py-10">
        <Work />
      </div>
      {/* <div className="py-10">
        <Contact />
      </div> */}
    </div>
  );
}

export default Home;
