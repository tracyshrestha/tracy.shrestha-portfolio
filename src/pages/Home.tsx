import ProjectsV2 from "./sections/v2/ProjectsV2";
import ProjectSwiperV2 from "./sections/v2/ProjectSwiperV2";
import NewSkills from "./sections/skills/SkillsMarquee";
import Intro from "../components/Introduction/Intro";
import About from "./sections/v2/AboutV2";
import Education from "./sections/v2/EducationV2";
import Experience from "./sections/v2/ExperienceV2";

function Home() {
  return (
    <div className="h-full bg-surface">
      <div className="h-lvh">
        <Intro />
      </div>
      <div className="pt-10">
        <About />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 md:flex-row md:items-stretch md:justify-center md:gap-8 lg:px-8">
        <div className="w-full min-w-0 md:w-1/2">
          <Education />
        </div>
        <div className="w-full min-w-0 md:w-1/2">
          <Experience />
        </div>
      </div>

      <div className="py-10 ">
        <NewSkills />
      </div>
      <div className="pt-3 pb-12 lg:hidden">
        <ProjectsV2 />
      </div>
      <div className="hidden pt-2 pb-12 lg:block">
        <ProjectSwiperV2 />
      </div>
    </div>
  );
}

export default Home;
