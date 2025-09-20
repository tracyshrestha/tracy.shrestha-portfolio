import { ImBriefcase } from "react-icons/im";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-4"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
    <section className=" text-white mx-12 items-center justify-center text-center ">
      <h2 className="flex text-4xl font-semibold mb-8 text-white items-center justify-center text-center">
        <ImBriefcase />
        Experience
      </h2>
      <div className="flex flex-col gap-5">
        <div className="bg-[#46376d]/20 backdrop-blur-md border border-[#46376d]/30 rounded-lg p-6 shadow-xl hover:bg-[#46376d]/30 hover:border-[#46376d]/40 transition-all duration-300 group ">
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white/90 transition-colors">
            Frontend
          </h3>
          <p className="text-white/80 mb-4 leading-relaxed">
            React.js, Vue.js, Next.js, TypeScript, JavaScript (ES6+), HTML, CSS,
            Tailwind CSS, Sass, ShadCN/UI
          </p>
        </div>
      </div>
    </section>
      </motion.div>
    </div>
  );
}

export default Experience;
