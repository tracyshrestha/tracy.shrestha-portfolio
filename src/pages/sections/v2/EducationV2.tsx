import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";

const education = [
  {
    degree: "Bachelors in Software Engineering",
    school: "Nepal College of Information Technology (NCIT)",
    university: "Pokhara University",
    period: "Sep 2018 — Aug 2023",
    yearOut: "2023",
  },
];

/**
 * Alternate Education UI (v2) — credential / diploma layout with year badge.
 * Swap in Home: `import Education from "./sections/v2/EducationV2"`
 */
function EducationV2() {
  return (
    <section
      id="education-v2"
      className="mx-auto w-full px-2 sm:px-4"
      aria-labelledby="education-v2-heading"
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="mb-8 flex items-center justify-center gap-2 text-white">
          <FaGraduationCap className="text-3xl text-purple-300" aria-hidden />
          <h2
            id="education-v2-heading"
            className="text-4xl font-semibold tracking-tight"
          >
            Education
          </h2>
        </div>

        <ul className="flex flex-col gap-5">
          {education.map((item) => (
            <li key={item.degree}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent transition-all duration-300 hover:border-purple-400/35 hover:shadow-[0_0_40px_-12px_rgba(140,80,220,0.45)]">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-purple-500/15 blur-2xl transition-opacity group-hover:bg-purple-400/25"
                />

                <div className="relative flex gap-5 p-6 sm:p-7">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/15 text-purple-200">
                    <FaGraduationCap className="text-2xl" aria-hidden />
                  </div>

                  <div className="min-w-0 flex-1 text-left">
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                      <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                        {item.degree}
                      </h3>
                      <span className="shrink-0 rounded-md bg-purple-500/20 px-2.5 py-1 text-sm font-medium tabular-nums text-purple-200">
                        {item.yearOut}
                      </span>
                    </div>
                    <p className="text-lg leading-relaxed text-white/75">
                      {item.school}
                    </p>
                    <p className="mt-0.5 text-base text-white/50">
                      {item.university}
                    </p>
                    <p className="mt-4 text-sm tracking-wide text-purple-300/80">
                      {item.period}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export default EducationV2;
