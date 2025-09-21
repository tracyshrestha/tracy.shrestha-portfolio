import { motion } from "framer-motion";
function About() {
  return (
    <section className="text-white mx-12 items-center justify-center text-center mb-10">
      <h2 className="text-4xl font-semibold mb-5 text-white items-center justify-center text-center">
        {/* <h2 className="text-4xl font-semibold mb-8 underline underline-offset-8  text-white items-center justify-center text-center decoration-[#C758AE]"> */}
        About Me
      </h2>
      <div className="">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="py-4"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#46376d]/20 backdrop-blur-md border border-[#46376d]/30 rounded-lg p-6 shadow-xl hover:bg-[#46376d]/30 hover:border-[#46376d]/40 transition-all duration-300 group">
            {/* <div className="bg-[#46376d]/20 backdrop-blur-md border-2 border-[#C758AE] rounded-lg p-6 shadow-xl hover:bg-[#46376d]/30 hover:border-[#c23fa3]  transition-all duration-300 group "> */}
            <p className="text-white/80 mb-4 leading-relaxed text-xl">
              I’m a frontend developer with experience building scalable web
              apps using modern frameworks like React, Next.js, and Vue. I focus
              on creating clean, performant UIs with great user experience.
              Recently, I’ve worked on CRM platforms, open data portals, and
              internal tools.
            </p>
          </div>
        </motion.div>
      </div>
      {/* <hr className="border-2 border-[#6B55A3] my-10  justify-center  mx-auto" /> */}
    </section>
  );
}

export default About;
