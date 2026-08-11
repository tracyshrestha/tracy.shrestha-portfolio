import { SlLock } from "react-icons/sl";
import { RiFileCopy2Fill } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

const projects = [
  {
    title: "Portfolio",
    description:
      "Designed and built a single-page portfolio showcasing skills and projects with smooth animations. Leveraged React component libraries to enhance interactivity and design.",
    tech: "React, TypeScript, Vite, Tailwind CSS",
    link: "https://github.com/tracyshrestha/tracy.shrestha-portfolio",
  },
  {
    title: "Trello Kanban Board",
    description:
      "Developed a Trello-style Kanban board featuring drag-and-drop task management with persistent state storage. Includes a fully supported dark theme.",
    tech: "React, Shadcn, TypeScript, Zustand, Framer Motion",
    link: "https://kanban-board-blush-six.vercel.app/",
  },
  {
    title: "Communication Platform",
    description:
   "Built a multi-tenant platform with real-time messaging, unified inbox, channel integrations, and AI-powered support tools.",
    tech: "Next.js, React, TypeScript, Tailwind CSS, WebSockets",
    isPrivate: true,
  },
  {
    title: "Campaign Automation Platform",
    description:
    "Developed a multi-tenant campaign platform supporting automated voice, SMS, and survey campaigns with real-time tracking, analytics, and streamlined campaign workflows.",
    tech: "Next.js, React, TypeScript, Tailwind CSS, WebSockets, Recharts",
    isPrivate: true,
  },  
  {
    title: "Blog Platform",
    description:
      "Developed a blog platform with JWT-based authentication, protected routes, and full CRUD functionality including rich text editor for blog posts.",
    tech: "React, ShadCN/UI, TypeScript, Zustand, JWT Auth",
    link: "https://blog-app-ivory-two-35.vercel.app/",
  },
  {
    title: "CRM System",
    description:
      "Built responsive interfaces for a client-facing CRM using React.js, Tailwind CSS, and ShadCN UI. Implemented role-based routing and dynamic sidebar with permissions.",
    tech: "React, TypeScript, Tailwind, ShadCN/UI, REST API",
    isPrivate: true,
  },

  {
    title: "Open Data Portal",
    description:
      "Developed an open data portal with interactive charts and integrated EmailJS for contact form handling. Implemented population pyramid visualizations using Recharts.",
    tech: "React, Tailwind CSS, Recharts",
    isPrivate: true,
  },
];

function ProjectSwiperV2() {
  return (
    <section
      id="projects-swiper-v2"
      className="mx-auto w-full max-w-[80rem] px-4 sm:px-6 lg:px-10"
      aria-labelledby="projects-swiper-v2-heading"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mb-10 flex items-center justify-center gap-2 text-white">
          <RiFileCopy2Fill className="text-3xl text-brand-300" aria-hidden />
          <h2
            id="projects-swiper-v2-heading"
            className="text-4xl font-semibold tracking-tight"
          >
            My Projects
          </h2>
        </div>

        <Swiper
          effect="coverflow"
          centeredSlides
          slidesPerView="auto"
          initialSlide={1}
          watchSlidesProgress
          slideToClickedSlide
          noSwiping
          noSwipingClass="swiper-no-swiping"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="project-swiper-v2 mx-auto w-full !pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.title} className="!h-auto !w-[380px]">
              <article className="project-card-surface group relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-transparent p-6 text-left shadow-[0_0_0_1px_rgba(159, 67, 138,0.06)] transition-all duration-300 hover:border-brand-400/40 hover:shadow-[0_24px_48px_-28px_rgba(159, 67, 138,0.55)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/65 to-transparent"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-500/15 blur-2xl transition-opacity group-hover:bg-brand-400/25"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-5 left-0 w-0.5 rounded-full bg-gradient-to-b from-brand-400/80 via-brand-600/40 to-transparent opacity-80"
                />

                <div className="relative pl-2">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="font-mono text-xs tabular-nums text-brand-400/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {project.isPrivate ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/50">
                        <SlLock className="text-[9px]" aria-hidden />
                        Private
                      </span>
                    ) : (
                      <span className="rounded-full border border-brand-400/25 bg-brand-500/10 px-2 py-0.5 text-[11px] text-brand-200">
                        Live
                      </span>
                    )}
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-lg leading-relaxed text-white/70">
                    {project.description}
                  </p>
                  <p className="mb-5 text-sm leading-relaxed text-brand-200/70">
                    <span className="text-white/40">Tech · </span>
                    {project.tech}
                  </p>
                </div>

                <div className="relative pl-2">
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
                      className="swiper-no-swiping inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-brand-400/30 bg-brand-600/85 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-brand-300/50 hover:bg-brand-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        window.open(
                          project.link,
                          "_blank",
                          "noopener,noreferrer",
                        );
                      }}
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
          /* Coverflow bloated hitboxes: only the card receives clicks */
          .project-swiper-v2 .swiper-slide {
            pointer-events: none !important;
          }
          .project-swiper-v2 .project-card-surface {
            pointer-events: auto;
          }
          .project-swiper-v2 .swiper-pagination {
            pointer-events: auto;
          }
          .project-swiper-v2 .swiper-pagination-bullet {
            background: rgba(180, 130, 255, 0.45);
            opacity: 1;
          }
          .project-swiper-v2 .swiper-pagination-bullet-active {
            background: #9F438A;
            transform: scale(1.15);
          }
        `}</style>
      </motion.div>
    </section>
  );
}

export default ProjectSwiperV2;
