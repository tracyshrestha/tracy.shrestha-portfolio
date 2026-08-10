import { motion } from "framer-motion";

/**
 * Alternate About UI (v2) — open editorial block, not a boxed glass card.
 * Swap in Home: `import About from "./sections/v2/AboutV2"`
 */
function AboutV2() {
  return (
    <section
      id="about-v2"
      className="relative mx-auto mb-14 w-full max-w-[100rem] px-6 sm:px-10 lg:px-16"
      aria-labelledby="about-v2-heading"
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.28em] text-purple-300/70">
          Introduction
        </p>
        <h2
          id="about-v2-heading"
          className="mb-10 text-center text-4xl font-semibold tracking-tight text-white"
        >
          About Me
        </h2>

        <div className="relative overflow-hidden rounded-2xl">
          {/* Ambient wash — not a hard card edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(140,90,230,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(70,40,120,0.18),transparent_50%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-6 left-0 w-1 rounded-full bg-gradient-to-b from-purple-400 via-purple-600 to-transparent"
          />

          <div className="relative border border-white/[0.06] bg-white/[0.02] px-8 py-10 pl-10 sm:px-12 sm:py-12 sm:pl-14">
            <span
              aria-hidden
              className="mb-4 block text-5xl leading-none text-purple-400/40"
              style={{ fontFamily: "var(--font-pacifico)" }}
            >
              “
            </span>
            <p className="text-left text-xl leading-[1.75] text-white/85 sm:text-2xl">
              I’m a frontend developer with experience building scalable web
              apps using modern frameworks like{" "}
              <span className="text-purple-200">React</span>,{" "}
              <span className="text-purple-200">Next.js</span>, and{" "}
              <span className="text-purple-200">Vue</span>. I focus on clean,
              performant UIs and strong user experience. Recently I’ve shipped
              CRM platforms, open data portals, and internal tools.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {["React", "TypeScript", "UX-minded", "Production UIs"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-purple-400/25 bg-purple-500/10 px-3 py-1 text-sm text-purple-200/90"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutV2;
