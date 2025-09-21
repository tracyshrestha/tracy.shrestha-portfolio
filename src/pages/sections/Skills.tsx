// import { FaPencil } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
function Skills() {
  return (
    <section className="text-white mx-12 items-center justify-center text-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=""
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

      <h2 className="flex text-4xl font-semibold mb-10 text-white items-center justify-center text-center">
        {/* <FaPencil className="pr-2 text-3xl" /> */}
        <FaTools className="pr-2 " />
        My Skills
      </h2>
      <div className="flex flex-col gap-5 ">
        <div className="bg-[#46376d]/20 backdrop-blur-md border border-[#46376d]/30 rounded-lg p-6 shadow-xl hover:bg-[#46376d]/30 hover:border-[#46376d]/40 transition-all duration-300 group">
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-white/90 transition-colors">
            Frontend
          </h3>
          <p className="text-white/80 mb-4 leading-relaxed text-xl">
            React.js, Vue.js, Next.js, TypeScript, JavaScript (ES6+), HTML, CSS,
            Tailwind CSS, Sass, ShadCN/UI
          </p>
        </div>
          {/* <div className="bg-[#46376d]/20 backdrop-blur-md border border-[#46376d]/30 rounded-lg p-6 shadow-xl hover:bg-[#46376d]/30 hover:border-[#46376d]/40 transition-all duration-300 group">
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white/90 transition-colors">
            Backend
          </h3>
          <p className="text-white/80 mb-4 leading-relaxed">
            API Integration & Testing (RESTful APIs)
          </p>
        </div> */}

        <div className="bg-[#46376d]/20 backdrop-blur-md border border-[#46376d]/30 rounded-lg p-6 shadow-xl hover:bg-[#46376d]/30 hover:border-[#46376d]/40 transition-all duration-300 group">
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-white/90 transition-colors">
            Tools
          </h3>
          <p className="text-white/80 text-xl mb-4 leading-relaxed">
            Git, Figma, VS Code, Postman
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
