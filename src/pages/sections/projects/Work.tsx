import { Link } from "react-router-dom";

function Work() {
  return (
    <section className="text-white mx-12 items-center justify-center text-center">
      <h2 className="text-4xl font-semibold mb-8 text-white items-center justify-center text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
        <div className="bg-[#46376d]/20 backdrop-blur-md border border-[#46376d]/30 rounded-lg p-6 shadow-xl hover:bg-[#46376d]/30 hover:border-[#46376d]/40 transition-all duration-300 group">
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white/90 transition-colors">
            CRM System
          </h3>
          <p className="text-white/80 mb-4 leading-relaxed">
            Description: Built responsive interfaces for a client-facing CRM
            using React.js, Tailwind CSS, and ShadCN UI. Implemented role-based
            routing and dynamic sidebar with permissions.
          </p>
          <p className="text-white/80 mb-4 leading-relaxed">
            Tech: React, TypeScript, Tailwind, REST API
          </p>
          <Link
            to="/work/crm"
            className="inline-block px-6 py-2 bg-white/90 hover:bg-white text-[#46376d] rounded-3xl hover:shadow-lg backdrop-blur-sm transition-all duration-200 font-medium"
          >
            View More
          </Link>
        </div>

        <div className="bg-[#46376d]/20 backdrop-blur-md border border-[#46376d]/30 rounded-lg p-6 shadow-xl hover:bg-[#46376d]/30 hover:border-[#46376d]/40 transition-all duration-300 group">
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white/90 transition-colors">
            Open Data Portal
          </h3>
          <p className="text-white/80 mb-4 leading-relaxed">
            Description: Developed an open data portal with interactive charts
            and multilingual support. Implemented population pyramid
            visualizations using Recharts.
          </p>
          <p className="text-white/80 mb-4 leading-relaxed">
            Tech: Next.js, Tailwind CSS, Recharts
          </p>
          <Link
            to="/work/opendata"
            className="inline-block px-6 py-2 bg-white/90 hover:bg-white text-[#46376d] rounded-3xl hover:shadow-lg backdrop-blur-sm transition-all duration-200 font-medium"
          >
            View More
          </Link>
        </div>

        <div className="bg-[#46376d]/20 backdrop-blur-md border border-[#46376d]/30 rounded-lg p-6 shadow-xl hover:bg-[#46376d]/30 hover:border-[#46376d]/40 transition-all duration-300 group">
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white/90 transition-colors">Portfolio</h3>
          <p className="text-white/80 mb-4 leading-relaxed">
            Description: Designed and built a single-page portfolio showcasing
            skills and projects with smooth animations.
          </p>
          <p className="text-white/80 mb-4 leading-relaxed">
            Tech: React, Vite, Tailwind CSS
          </p>
          <Link
            to="/work/cv-management"
            className="inline-block px-6 py-2 bg-white/90 hover:bg-white text-[#46376d] rounded-3xl hover:shadow-lg backdrop-blur-sm transition-all duration-200 font-medium"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Work;
