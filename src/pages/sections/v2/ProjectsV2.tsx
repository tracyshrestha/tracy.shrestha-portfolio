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
    title: "Communication Platform",
    description:
    "Developed a multi-tenant communication platform with real-time messaging, unified inbox, OAuth channel integrations, and AI-assisted support features.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "WebSockets"],
    isPrivate: true,
  },
  {
    title: "Outbound Campaign Automation Platform",
    description:
    "Developed a multi-tenant campaign platform supporting automated voice, SMS, and survey campaigns with real-time tracking, analytics, and streamlined campaign workflows.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "WebSockets", "Recharts"],
    isPrivate: true,
  },
  {
    title: "Blog Platform",
    description:
      "Developed a blog platform with JWT-based authentication, protected routes, and full CRUD functionality for blog posts. Focused on clean architecture, reusable custom hooks, and robust state management.",
    tech: ["React", "ShadCN/UI", "TypeScript", "Zustand", "JWT Auth"],
    link: "https://blog-app-ivory-two-35.vercel.app/",
  },
  {
    title: "CRM System",
    description:
      "Built responsive interfaces for a client-facing CRM using React.js, Tailwind CSS, and ShadCN UI. Implemented role-based routing and dynamic sidebar with permissions.",
    tech: ["React", "TypeScript", "Tailwind", "ShadCN/UI", "REST API"],
    isPrivate: true,
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
      className="mx-auto w-full max-w-xl px-4 sm:px-6"
      aria-labelledby="projects-v2-heading"
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="mb-8 flex items-center justify-center gap-2 text-ink">
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
              <article className="card-surface-gradient group relative flex min-h-[380px] flex-col overflow-hidden rounded-2xl p-6 text-left">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent opacity-70"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 top-0 h-28 w-28 rounded-full bg-brand-500/15 blur-2xl"
                />

                <div className="relative mb-4 flex items-start justify-between gap-3">
                  <span className="font-mono text-sm tabular-nums text-brand-400/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {project.isPrivate ? (
                    <span className="card-chip private-badge inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs text-ink/55">
                      <SlLock className="text-[10px]" aria-hidden />
                      Private
                    </span>
                  ) : (
                    <span className="private-badge rounded-full border border-brand-400/25 bg-brand-500/10 px-2.5 py-0.5 text-xs text-brand-200">
                      Live
                    </span>
                  )}
                </div>

                <h3 className="relative mb-3 text-xl font-semibold text-ink sm:text-2xl">
                  {project.title}
                </h3>
                <p className="relative mb-5 flex-1 text-base leading-relaxed text-ink/65">
                  {project.description}
                </p>

                <ul className="relative mb-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="card-chip rounded-md px-2 py-0.5 text-xs text-brand-200"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-auto">
                  {project.isPrivate ? (
                    <span className="card-chip inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm text-ink/45">
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
