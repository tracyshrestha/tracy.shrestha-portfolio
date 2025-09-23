import { SlLock } from "react-icons/sl";
import { RiFileCopy2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
// @ts-ignore
import "swiper/css";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper/modules";

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
          {/* Project 1 */}
          <SwiperSlide className="!w-[350px]">
            <div className="bg-[#46376d]/20 backdrop-blur-md border border-[#46376d]/30 rounded-lg p-6 shadow-xl hover:bg-[#46376d]/30 hover:border-[#46376d]/40 transition-all duration-300 group h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-white/90">
                  CRM System
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed text-xl">
                  Built responsive interfaces for a client-facing CRM using
                  React.js, Tailwind CSS, and ShadCN UI. Implemented role-based
                  routing and dynamic sidebar with permissions.
                </p>
                <p className="text-white/80 mb-4 leading-relaxed text-xl">
                  Tech: React, TypeScript, Tailwind, ShadCN/UI, REST API
                </p>
              </div>
              <button
                className="inline-flex items-center gap-2 px-6 py-2 bg-gray-500 text-[#46376d] rounded-3xl hover:shadow-lg backdrop-blur-sm transition-all duration-200 font-medium"
                disabled
              >
                <SlLock />
                <span>Private deployment for client use</span>
              </button>
            </div>
          </SwiperSlide>
          {/* Project 3 */}
          <SwiperSlide className="!w-[350px]">
            <div className="bg-[#46376d]/20 backdrop-blur-md border border-[#46376d]/30 rounded-lg p-6 shadow-xl hover:bg-[#46376d]/30 hover:border-[#46376d]/40 transition-all duration-300 group h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-white/90">
                  Portfolio
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed text-xl">
                  Designed and built a single-page portfolio showcasing skills
                  and projects with smooth animations.Leveraged React component
                  libraries to enhance interactivity and design
                </p>
                <p className="text-white/80 mb-4 leading-relaxed text-xl">
                  Tech: React, TypeScript, Vite, Tailwind CSS
                </p>
              </div>
              <a
                href="https://github.com/tracyshrestha/tracy.shrestha-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 my-3 bg-white/90 hover:bg-white text-[#46376d] rounded-3xl hover:shadow-lg backdrop-blur-sm transition-all duration-200 font-medium"
              >
                View More
              </a>
            </div>
          </SwiperSlide>
          {/* Project 2 */}
          <SwiperSlide className="!w-[350px]">
            <div className="bg-[#46376d]/20 backdrop-blur-md border border-[#46376d]/30 rounded-lg p-6 shadow-xl hover:bg-[#46376d]/30 hover:border-[#46376d]/40 transition-all duration-300 group h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-white/90">
                  Open Data Portal
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed text-xl">
                  Developed an open data portal with interactive charts and
                  integrated EmailJS for contact form handling. Implemented
                  population pyramid visualizations using Recharts.
                </p>
                <p className="text-white/80 mb-4 leading-relaxed text-xl">
                  Tech: React, Tailwind CSS, Recharts
                </p>
              </div>
              <button
                className="inline-flex items-center gap-2 px-6 py-2 bg-gray-500 text-[#46376d] rounded-3xl hover:shadow-lg backdrop-blur-sm transition-all duration-200 font-medium"
                disabled
              >
                <SlLock />
                <span>Private deployment for client use</span>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </section>
  );
}

export default Work;
