import { motion } from "framer-motion";
import { RiFileCopy2Fill } from "react-icons/ri";
import { SlLock } from "react-icons/sl";
import { FiArrowUpRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const projects = [
  {
    title: "Portfolio",
    description:
      "Designed and built a single-page portfolio showcasing skills and projects with smooth animations. Leveraged React component libraries to enhance interactivity and design.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    link: "https://github.com/tracyshrestha/tracy.shrestha-portfolio",
  },
  {
    title: "Trello Kanban Board",
    description:
      "Developed a Trello-style Kanban board featuring drag-and-drop task management with persistent state storage. Includes a fully supported dark theme for improved usability.",
    tech: ["React", "Shadcn UI", "TypeScript", "Zustand", "Framer Motion"],
    link: "https://kanban-board-blush-six.vercel.app/",
  },
  {
    title: "CRM System",
    description:
      "Built responsive interfaces for a client-facing CRM using React.js, Tailwind CSS, and ShadCN UI. Implemented role-based routing and dynamic sidebar with permissions.",
    tech: ["React", "TypeScript", "Tailwind", "ShadCN/UI", "REST API"],
    isPrivate: true,
  },
  {
    title: "Blog Platform",
    description:
      "Developed a blog platform with JWT-based authentication, protected routes, and full CRUD functionality for blog posts. Focused on clean architecture and reusable hooks.",
    tech: ["React", "ShadCN/UI", "TypeScript", "Zustand", "JWT Auth"],
    link: "https://blog-app-ivory-two-35.vercel.app/",
  },
  {
    title: "Open Data Portal",
    description:
      "Developed an open data portal with interactive charts and integrated EmailJS for contact form handling. Implemented population pyramid visualizations using Recharts.",
    tech: ["React", "Tailwind CSS", "Recharts"],
    isPrivate: true,
  },
];

/**
 * Mobile projects: one card at a time with swipe + pagination dots.
 * Used below `lg` on Home (desktop uses ProjectSwiperV2).
 */
function ProjectsV2() {
  return (
    <section
      id="projects-v2"
      className="mx-auto w-full max-w-lg px-5 sm:px-8"
      aria-labelledby="projects-v2-heading"
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="mb-8 flex items-center justify-center gap-2 text-white">
          <RiFileCopy2Fill className="text-3xl text-brand-300" aria-hidden />
          <h2
            id="projects-v2-heading"
            className="text-4xl font-semibold tracking-tight"
          >
            My Projects
          </h2>
        </div>

        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={16}
          grabCursor
          pagination={{ clickable: true }}
          className="projects-mobile-swiper !pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.title} className="!h-auto">
              <article className="group relative flex min-h-[380px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent p-6 text-left">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent opacity-70"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 top-0 h-28 w-28 rounded-full bg-brand-500/10 blur-2xl"
                />

                <div className="relative mb-4 flex items-start justify-between gap-3">
                  <span className="font-mono text-sm tabular-nums text-brand-400/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {project.isPrivate ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/55">
                      <SlLock className="text-[10px]" aria-hidden />
                      Private
                    </span>
                  ) : (
                    <span className="rounded-full border border-brand-400/25 bg-brand-500/10 px-2.5 py-0.5 text-xs text-brand-200">
                      Live
                    </span>
                  )}
                </div>

                <h3 className="relative mb-3 text-xl font-semibold text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="relative mb-5 flex-1 text-base leading-relaxed text-white/65">
                  {project.description}
                </p>

                <ul className="relative mb-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-white/[0.08] bg-black/30 px-2 py-0.5 text-xs text-brand-100/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-auto">
                  {project.isPrivate ? (
                    <span className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white/45">
                      <SlLock aria-hidden />
                      Client-only deployment
                    </span>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600/90 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-500"
                    >
                      View live
                      <FiArrowUpRight className="text-base" />
                    </a>
                  )}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>{`
          .projects-mobile-swiper .swiper-pagination {
            bottom: 0 !important;
          }
          .projects-mobile-swiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            margin: 0 6px !important;
            background: rgba(180, 130, 255, 0.4);
            opacity: 1;
            transition: transform 0.2s, background 0.2s;
          }
          .projects-mobile-swiper .swiper-pagination-bullet-active {
            background: #9F438A;
            transform: scale(1.25);
          }
        `}</style>
      </motion.div>
    </section>
  );
}

export default ProjectsV2;
