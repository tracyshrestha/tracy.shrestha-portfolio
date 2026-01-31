import { SlLock } from "react-icons/sl";
import { RiFileCopy2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
// @ts-ignore
import "swiper/css";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper/modules";

const projects = [
  {
    title: "Portfolio",
    description:
      "Designed and built a single-page portfolio showcasing skills and projects with smooth animations.Leveraged React component libraries to enhance interactivity and design",
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
    title: "CRM System",
    description:
      "Built responsive interfaces for a client-facing CRM using React.js, Tailwind CSS, and ShadCN UI. Implemented role-based routing and dynamic sidebar with permissions.",
    tech: "React, TypeScript, Tailwind, ShadCN/UI, REST API",
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
    title: "Open Data Portal",
    description:
      "Developed an open data portal with interactive charts and integrated EmailJS for contact form handling. Implemented population pyramid visualizations using Recharts.",
    tech: "React, Tailwind CSS, Recharts",
    isPrivate: true,
  },
];

function Work() {
  return (
    <section className="text-white mx-12 items-center justify-center text-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="flex text-4xl font-semibold mb-8 text-white items-center justify-center text-center">
          <RiFileCopy2Fill className="pr-2 mb-1" />
          My Projects
        </h2>

        {/* SwiperJS wrapper */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={1}
          allowTouchMove={true}
          watchSlidesProgress={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper md:max-w-5xl max-w-xl swiper-fix-clicks"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="!w-[350px]">
              <div className="bg-[#46376d]/20 backdrop-blur-md border border-[#46376d]/30 rounded-lg p-6 shadow-xl hover:bg-[#46376d]/30 hover:border-[#46376d]/40 transition-all duration-300 group h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-white/90">
                    {project.title}
                  </h3>

                  <p className="text-white/80 mb-4 leading-relaxed text-xl">
                    {project.description}
                  </p>

                  <p className="text-white/80 mb-4 leading-relaxed text-xl">
                    Tech: {project.tech}
                  </p>
                </div>

                {project.isPrivate ? (
                  <button
                    className="inline-flex items-center gap-2 px-6 py-2 bg-gray-500 text-[#46376d] rounded-3xl hover:shadow-lg backdrop-blur-sm transition-all duration-200 font-medium"
                    disabled
                  >
                    <SlLock />
                    <span>Private deployment for client use</span>
                  </button>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-white/90 text-[#46376d] rounded-3xl hover:bg-white hover:shadow-lg backdrop-blur-sm transition-all duration-200 font-medium"
                  >
                    View Live Project
                  </a>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

export default Work;
