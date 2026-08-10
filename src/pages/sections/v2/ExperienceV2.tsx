import { motion } from "framer-motion";
import { ImBriefcase } from "react-icons/im";

const roles = [
  {
    title: "Frontend Developer",
    company: "Cellapp / Smartpalika",
    period: "Nov 2024 — Present",
    current: true,
  },
  {
    title: "Frontend Developer Intern",
    company: "Cellapp / Smartpalika",
    period: "July 2024 — Oct 2024",
    current: false,
  },
];

/**
 * Alternate Experience UI (v2) — clean vertical timeline (not nested box timeline).
 * Swap in Home: `import Experience from "./sections/v2/ExperienceV2"`
 */
function ExperienceV2() {
  return (
    <section
      id="experience-v2"
      className="mx-auto w-full px-2 sm:px-4"
      aria-labelledby="experience-v2-heading"
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="mb-8 flex items-center justify-center gap-2 text-white">
          <ImBriefcase className="mb-0.5 text-2xl text-purple-300" aria-hidden />
          <h2
            id="experience-v2-heading"
            className="text-4xl font-semibold tracking-tight"
          >
            Experience
          </h2>
        </div>

        <ol className="relative ml-3 border-l border-purple-500/35 pl-0">
          {roles.map((role, index) => (
            <li key={`${role.title}-${role.period}`} className="relative pb-10 last:pb-0">
              {/* Timeline node */}
              <span
                aria-hidden
                className={`absolute -left-[5px] top-1.5 flex h-2.5 w-2.5 items-center justify-center rounded-full ring-4 ring-black ${
                  role.current
                    ? "bg-purple-400 shadow-[0_0_12px_2px_rgba(192,132,252,0.7)]"
                    : "bg-purple-700"
                }`}
              />

              <motion.article
                initial={{ x: 12, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="ml-6 rounded-xl border border-white/[0.06] bg-white/[0.03] p-5 text-left transition-colors duration-300 hover:border-purple-400/30 hover:bg-purple-500/[0.07]"
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  {role.current && (
                    <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                      Present
                    </span>
                  )}
                  <time className="text-sm text-purple-300/85">{role.period}</time>
                </div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {role.title}
                </h3>
                <p className="mt-1 text-lg text-white/60">{role.company}</p>
              </motion.article>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}

export default ExperienceV2;
