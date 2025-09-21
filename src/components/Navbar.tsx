import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { MdHome } from "react-icons/md";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black text-white px-6 py-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-4xl text-white"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Tracy
        </h1>
        <div className="hidden md:flex">
          <ul className="flex space-x-6 text-[25px]">
            <li className="flex ">
              <Link to="/" className="flex hover:underline">
                <MdHome className="mt-1" />  
                {/* Home */}
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
          </ul>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="bg-transparent hover:bg-transparent text-white p-2 rounded focus:outline-none"
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

      {/* Mobile Menu Popover */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-950 z-50 shadow-lg">
          <div className="container mx-auto px-6 py-8">
            <ul className="flex flex-col space-y-4 text-xl">
              <li>
                <Link
                  to="/"
                  className=" flex space-x-4 pt-2 hover:underline items-center"
                  onClick={closeMenu}
                >
                  <MdHome className="mt-1" />  &nbsp;
                  Home
                </Link>
              </li>
              <li className="flex space-x-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/tracyshrestha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="  hover:underline flex items-center"
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
                  className="  hover:underline flex items-center"
                  onClick={closeMenu}
                >
                  <FaGithub className="mr-2" /> GitHub
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