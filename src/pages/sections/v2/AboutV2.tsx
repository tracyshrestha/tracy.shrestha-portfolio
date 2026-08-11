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
        <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.28em] text-brand-300/70">
          Introduction
        </p>
        <h2
          id="about-v2-heading"
          className="mb-10 text-center text-4xl font-semibold tracking-tight text-ink"
        >
          About Me
        </h2>

        <div className="relative overflow-hidden rounded-2xl">
          {/* Ambient wash — not a hard card edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(159, 67, 138,0.28),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(196, 107, 176,0.22),transparent_50%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-6 left-0 w-1 rounded-full bg-gradient-to-b from-brand-400 via-brand-500 to-transparent"
          />

          <div className="card-surface relative rounded-2xl border-0 px-8 py-10 pl-10 sm:px-12 sm:py-12 sm:pl-14">
            <span
              aria-hidden
              className="mb-4 block text-5xl leading-none text-brand-400/40"
              style={{ fontFamily: "var(--font-pacifico)" }}
            >
              “
            </span>
            <p className="text-left text-xl leading-[1.75] text-ink/85 sm:text-2xl">
              I’m a frontend developer with experience building scalable web
              apps using modern frameworks like{" "}
              <span className="text-brand-200">React</span>,{" "}
              <span className="text-brand-200">Next.js</span>, and{" "}
              <span className="text-brand-200">Vue</span>. I focus on clean,
              performant UIs and strong user experience. Recently I’ve shipped
              CRM platforms, open data portals, and internal tools.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {["React", "TypeScript", "UX-minded", "Production UIs"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand-400/25 bg-brand-500/10 px-3 py-1 text-sm text-brand-200/90"
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
