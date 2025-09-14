import { Heart } from "lucide-react";

interface Experience {
  id: string;
  title: string;
  duration: string;
  period: string;
  skills: string[];
  isPresent?: boolean;
}

const experiences: Experience[] = [
  {
    id: "1",
    title: "Frontend Developer",
    duration: "11 mos",
    period: "Nov 2024 - Present",
    skills: ["TypeScript", "Vue.js", "+3 skills"],
    isPresent: true,
  },
  {
    id: "2", 
    title: "Frontend Developer Intern",
    duration: "4 mos",
    period: "Jul 2024 - Oct 2024",
    skills: [],
  },
];

function ExperienceTimeline () {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-200"></div>
        
        <div className="space-y-8">
          {experiences.map((experience, _index) => (
            <div key={experience.id} className="relative flex items-start gap-4">
              {/* Timeline dot */}
              <div className="relative z-10 flex h-4 w-4 items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gray-300 border-2 border-white shadow-sm"></div>
              </div>
              
              {/* Experience content */}
              <div className="flex-1 pb-4">
                <div className="rounded-lg bg-white p-4 shadow-sm border border-gray-200">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {experience.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3">
                    {experience.period} • {experience.duration}
                  </p>
                  
                  {experience.skills.length > 0 && (
                    <div className="flex items-center gap-2 text-sm">
                      <Heart className="h-4 w-4 text-gray-600" fill="currentColor" />
                      <div className="flex flex-wrap gap-1">
                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ExperienceTimeline;