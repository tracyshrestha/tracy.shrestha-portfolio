import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { MdHome, MdDownload, MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

const CV_HREF = encodeURI(
  "/Frontend Developer- Tracy Shrestha Resume.pdf",
);
const CV_FILENAME = "Tracy-Shrestha-Resume.pdf";

function ThemeToggle({
  isLight,
  onToggle,
}: {
  isLight: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      onClick={onToggle}
      className="relative inline-flex h-8 w-14 shrink-0 items-center rounded-full border border-white/25 bg-white/15 p-0.5 shadow-inner transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Switch to dark theme" : "Switch to light theme"}
    >
      <span
        className="pointer-events-none absolute left-1.5 flex items-center text-white/90"
        aria-hidden
      >
        <MdLightMode className="text-[0.85rem]" />
      </span>
      <span
        className="pointer-events-none absolute right-1.5 flex items-center text-white/90"
        aria-hidden
      >
        <MdDarkMode className="text-[0.85rem]" />
      </span>

      <span
        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand shadow-sm transition-transform duration-300 ease-out ${
          isLight ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isLight ? (
          <MdLightMode className="text-[0.9rem] text-brand-600" />
        ) : (
          <MdDarkMode className="text-[0.9rem] text-brand-700" />
        )}
      </span>
    </button>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const update = () => {
      const threshold = Math.max(window.innerHeight * 0.85, 400);
      setPastHero(window.scrollY > threshold);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={
        pastHero
          ? isLight
            ? "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand px-6 py-4 text-white shadow-md transition-[background-color,box-shadow,border-color] duration-300"
            : "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black px-6 py-4 text-white shadow-md transition-[background-color,box-shadow,border-color] duration-300"
          : "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent px-6 py-4 text-white transition-[background-color,box-shadow,border-color] duration-300"
      }
    >
      <div className="container mx-auto flex items-center justify-between">
        <h1
          className="text-4xl text-white"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Tracy
        </h1>
        <div className="hidden md:flex">
          <ul className="flex items-center space-x-6 text-[25px]">
            <li className="flex">
              <Link
                to="/"
                className="flex hover:underline"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
              >
                <MdHome className="mt-1" />
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tracyshrestha"
                target="_blank"
                rel="noopener noreferrer"
                className="lexusText italic hover:underline"
              >
                <FaLinkedin className="mt-1" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tracyshrestha"
                target="_blank"
                rel="noopener noreferrer"
                className="lexusText italic hover:underline"
              >
                <FaGithub className="mt-1" />
              </a>
            </li>
            <li>
              <a
                href={CV_HREF}
                download={CV_FILENAME}
                className="lexusText italic hover:underline"
                title="Download CV"
              >
                <MdDownload className="mt-1" />
              </a>
            </li>
            <li className="flex items-center">
              <ThemeToggle isLight={isLight} onToggle={toggleTheme} />
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle isLight={isLight} onToggle={toggleTheme} />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded bg-transparent p-2 text-white hover:bg-transparent focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <IoClose className="text-2xl md:text-3xl" />
            ) : (
              <IoMenu className="text-2xl md:text-3xl" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={
            pastHero
              ? isLight
                ? "absolute top-full left-0 z-50 w-full border-b border-white/15 bg-brand text-white shadow-lg md:hidden"
                : "absolute top-full left-0 z-50 w-full border-b border-white/15 bg-black text-white shadow-lg md:hidden"
              : "absolute top-full left-0 z-50 w-full border-b border-white/15 bg-black/35 text-white shadow-lg backdrop-blur-md md:hidden"
          }
        >
          <div className="container mx-auto px-6 py-8">
            <ul className="flex flex-col space-y-4 text-xl">
              <li>
                <Link
                  to="/"
                  className="flex items-center space-x-4 pt-2 hover:underline"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    closeMenu();
                  }}
                >
                  <MdHome className="mt-1" /> &nbsp; Home
                </Link>
              </li>
              <li className="flex space-x-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/tracyshrestha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:underline"
                  onClick={closeMenu}
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </li>
              <li className="flex space-x-4">
                <a
                  href="https://github.com/tracyshrestha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:underline"
                  onClick={closeMenu}
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </li>
              <li className="flex space-x-4 pt-2">
                <a
                  href={CV_HREF}
                  download={CV_FILENAME}
                  className="flex items-center hover:underline"
                  onClick={closeMenu}
                >
                  <MdDownload className="mr-2" /> Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
