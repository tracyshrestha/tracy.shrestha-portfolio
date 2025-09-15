import { ImBriefcase } from "react-icons/im";
function ExperienceTimeline() {
  return (
    <section className=" text-white mx-12 items-center justify-center text-center ">
      <h2 className="flex text-4xl font-semibold mb-8 text-white items-center justify-center text-center">
        <ImBriefcase className="pr-2 mb-1"/>
        Experience
      </h2>
      <div className="flex flex-col gap-5 items-start max-w-2xl mx-auto p-6 bg-[#46376d]/20 backdrop-blur-md border border-[#46376d]/30 rounded-lg shadow-xl hover:bg-[#46376d]/30 hover:border-[#46376d]/40 transition-all duration-300 group">
        <div className="flex flex-col py-2 px-8">
          {/* Card */}
          <div className="flex-1 pb-4 relative">
            <div className="absolute top-[25%] -left-5 ml-[0px] w-px h-28 bg-gray-400">
              <div className="relative z-10 -ml-1 flex h-2 w-2 items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-gray-300 border-1 border-white shadow-sm"></div>
              </div>
            </div>
            <div className="  p-0  ">
              <h3 className="font-semibold text-lg text-gray-100 mt-2      transition-colors">
                Frontend Developer (Cellapp/ Smartpalika)
              </h3>
              <p className="text-white/80  leading-relaxed">
                Nov 2024 - Present
              </p>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute top-[23%] -left-5 ml-[0px] w-px h-10 bg-gray-400">
              <div className="relative z-10 -ml-1 flex h-2 w-2 items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-gray-300 border-1 border-white shadow-sm"></div>
              </div>
            </div>
            <div className="  py-4 pl-8">
              <h3 className="font-semibold text-lg text-gray-100   transition-colors">
                Frontend Developer Intern (Cellapp/ Smartpalika)
              </h3>
              <p className="text-white/80  leading-relaxed">
                July 2024 - Oct 2024
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
export default ExperienceTimeline;
