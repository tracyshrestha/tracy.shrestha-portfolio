/**
 * Preview route for v2 card designs only.
 * Old About / Education / Experience / Projects files are untouched.
 *
 * View at: /cards-v2
 */
import AboutV2 from "./AboutV2";
import EducationV2 from "./EducationV2";
import ExperienceV2 from "./ExperienceV2";
import ProjectSwiperV2 from "./ProjectSwiperV2";

function CardsV2Preview() {
  return (
    <div className="min-h-screen w-full bg-black py-16">
      <p className="mb-12 text-center text-sm uppercase tracking-[0.2em] text-purple-300/60">
        Card UI proposals · v2
      </p>
      <AboutV2 />
      <div className="mx-auto mt-6 flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 md:flex-row md:items-stretch md:justify-center md:gap-8 lg:px-8">
        <div className="w-full md:w-1/2">
          <EducationV2 />
        </div>
        <div className="w-full md:w-1/2">
          <ExperienceV2 />
        </div>
      </div>
      <div className="mt-16">
        <ProjectSwiperV2 />
      </div>
    </div>
  );
}

export default CardsV2Preview;
