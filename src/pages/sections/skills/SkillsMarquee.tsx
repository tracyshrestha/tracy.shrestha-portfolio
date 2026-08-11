import type { ComponentType } from "react";
import Marquee from "react-fast-marquee";
import { FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import { NextJsIcon } from "@/assets/skills/icons";

// languages
import jsLogo from "@/assets/skills/js.svg";
import tsLogo from "@/assets/skills/typescript.svg";
import htmlLogo from "@/assets/skills/html-5.svg";
import cssLogo from "@/assets/skills/css-3.svg";

// frameworks and languages
import reactLogo from "@/assets/skills/react2.svg";
import vueLogo from "@/assets/skills/vue.svg";
import tailwindLogo from "@/assets/skills/tailwind.svg";
import bootstrapLogo from "@/assets/skills/bootstrap.svg";

// state management
import reduxLogo from "@/assets/skills/redux.svg";
import shadcnLogo from "@/assets/skills/shadcn.png";

// tools and platforms
import gitLogo from "@/assets/skills/git.svg";
import githubLogo from "@/assets/skills/github.svg";
import npmLogo from "@/assets/skills/npm.svg";
import viteLogo from "@/assets/skills/vite.svg";

// design collaboration
import figmaLogo from "@/assets/skills/figma.svg";

type SkillItem = {
  label: string;
  src?: string;
  Icon?: ComponentType<{ className?: string }>;
};

const iconClassName =
  "h-[40px] w-[40px] sm:h-[35px] sm:w-[35px] md:h-[45px] md:w-[45px] shrink-0";

const tech: SkillItem[] = [
  { src: jsLogo, label: "JavaScript" },
  { src: tsLogo, label: "TypeScript" },
  { src: htmlLogo, label: "HTML" },
  { src: cssLogo, label: "CSS" },
  { src: reactLogo, label: "React" },
];
const tech2: SkillItem[] = [
  { src: vueLogo, label: "Vue" },
  { Icon: NextJsIcon, label: "Next.js" },
  { src: tailwindLogo, label: "Tailwind CSS" },
  { src: bootstrapLogo, label: "Bootstrap" },
  { src: reduxLogo, label: "Redux" },
];
const tech3: SkillItem[] = [
  { src: shadcnLogo, label: "Shadcn" },
  { src: gitLogo, label: "Git" },
  { src: githubLogo, label: "GitHub" },
  { src: npmLogo, label: "npm" },
  { src: viteLogo, label: "Vite" },
  { src: figmaLogo, label: "Figma" },
];

// 🔹 Reusable SkillMarquee component
const SkillMarquee = ({ items }: { items: SkillItem[] }) => (
  <Marquee
    gradient={false}
    speed={50}
    pauseOnHover
    direction="left"
    className="marquee-content"
  >
    {[...items, ...items].map((item, i) => {
      const Icon = item.Icon;
      return (
        <div
          key={`${item.label}-${i}`}
          className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 md:mx-5 mx-0"
        >
          {Icon ? (
            <Icon className={iconClassName} />
          ) : (
            <img
              src={item.src}
              alt={item.label}
              className="h-[40px] sm:h-[35px] md:h-[45px] w-auto"
            />
          )}
          <span className="text-ink text-base sm:text-sm md:text-lg font-medium whitespace-nowrap">
            {item.label}
          </span>
        </div>
      );
    })}
  </Marquee>
);

export default function TechStackMarquee() {
  return (
    <section className="text-ink mx-12 items-center justify-center text-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="flex text-4xl font-semibold mb-10 text-ink items-center justify-center text-center">
          <FaTools className="pr-2 text-brand-300" />
          My Skills
        </h2>
        <div className="flex flex-col mx-auto items-center justify-center text-center w-full md:max-w-[900px] max-w-[200px] overflow-x-hidden gap-y-3">
          <style>{`
            .marquee-content {
              gap: 2rem;
              animation-duration: 20s;
            }
          `}</style>

          {/* Reuse component instead of repeating */}
          <SkillMarquee items={tech} />
          <SkillMarquee items={tech2} />
          <SkillMarquee items={tech3} />
        </div>
      </motion.div>
    </section>
  );
}
