import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
function Education() {
  return (
    <div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-4"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
    <section className="text-white mx-12 items-center justify-center text-center ">
      <h2 className="flex text-4xl font-semibold mb-8 text-white items-center justify-center text-center">
        <FaGraduationCap className="pr-1" />
        Education
      </h2>
      <div className="flex flex-col gap-5 w-full ">
        <div className="bg-[#46376d]/20 backdrop-blur-md border border-[#46376d]/30 rounded-lg p-6 shadow-xl hover:bg-[#46376d]/30 hover:border-[#46376d]/40 transition-all duration-300 group w-full">
        <ul>
           <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white/90 transition-colors">
            Bachelors in Software Engineering
          </h3>
          <p className="text-white/80 mb-4 leading-relaxed">
            Nepal College of Information Technology (NCIT),<br /> Pokhara University
          </p>
          <p className="text-white/80 mb-4 leading-relaxed">
            Sep 2018 - Aug 2023
          </p>
        </ul>
         
        </div>
      </div>
    </section>
      </motion.div>
    </div>
  );
}

export default Education;
