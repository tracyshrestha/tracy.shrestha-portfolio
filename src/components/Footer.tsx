import { useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdAttachEmail, MdDownload } from "react-icons/md";
import { TbMessageCirclePlus } from "react-icons/tb";
import EmailForm from "../pages/sections/ContactForm";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const CV_HREF = encodeURI(
  "/Frontend Developer- Tracy Shrestha Resume.pdf",
);
const CV_FILENAME = "Tracy-Shrestha-Resume.pdf";

function Footer() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <>
      <footer className="relative mt-auto border-t border-footer-ink/15 bg-footer py-4 pt-10 text-center text-footer-ink transition-colors duration-300">
        {/* Theme-matched atmosphere: footer base + brand tint + soft grid */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute inset-0 bg-footer" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,var(--footer-glow),transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.06),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--footer-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--footer-grid)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,#000_35%,transparent_100%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-between sm:flex-row">
          <div className="hidden w-full items-center text-center sm:block sm:w-2/6">
            <p className="w-full text-xl text-footer-ink">
              © {new Date().getFullYear()} Tracy Shrestha Portfolio.
              <br />
              All rights reserved.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center pb-2 pt-5 text-footer-ink sm:w-2/6 sm:pt-0">
            <div className="w-full pb-3 text-left text-xl font-bold">
              <p className="text-center">Contacts</p>

              <hr className="mx-auto m-5 w-[60%] border-footer-ink/50" />
            </div>

            <div className="flex flex-col justify-center text-left">
              <div
                className="flex cursor-pointer"
                onClick={() => (window.location.href = "tel:9767245189")}
              >
                <IoCallSharp className="mt-1" />
                <p className="pl-2">+977 9767245189</p>
              </div>

              <div
                className="flex cursor-pointer"
                onClick={() =>
                  (window.location.href = "mailto:tracysh99@gmail.com")
                }
              >
                <MdAttachEmail className="mt-1" />
                <p className="pl-2">tracysh99@gmail.com</p>
              </div>
              <a
                href={CV_HREF}
                download={CV_FILENAME}
                className="mt-1 flex cursor-pointer items-center hover:underline"
                title="Download CV"
              >
                <MdDownload className="mt-1" />
                <p className="pl-2">Download CV</p>
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center pb-2 pt-5 text-footer-ink sm:w-2/6 sm:pt-0">
            <div className="w-full pb-3 text-left text-xl font-bold">
              <p className="text-center">Socials</p>

              <hr className="mx-auto m-5 w-[60%] border-footer-ink/50" />
            </div>

            <div className="flex flex-col justify-center text-left">
              <div
                className="flex cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/tracyshrestha",
                    "_blank",
                  )
                }
              >
                <FaLinkedin className="mt-1" />
                <p className="pl-2">linkedin.com/in/tracyshrestha</p>
              </div>
              <div
                className="flex cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/tracyshrestha", "_blank")
                }
              >
                <FaGithub className="mt-1" />
                <p className="pl-2">github.com/tracyshrestha</p>
              </div>
            </div>
          </div>
          <div className="mt-5 block w-full items-center px-4 text-center sm:hidden">
            <p className="w-full text-xl text-footer-ink">
              © {new Date().getFullYear()} Tracy Shrestha Portfolio.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating message button — fixed bottom-right */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsPopoverOpen(true)}
          className="flex items-center gap-2 rounded-full bg-[#9F438A] px-4 py-3 text-lg text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#8A3878]"
          title="Send Message"
          aria-label="Send Message"
        >
          <TbMessageCirclePlus className="text-xl" />
        </button>
      </div>

      {isPopoverOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75"
          onClick={() => setIsPopoverOpen(false)}
        >
          <div
            className="mx-4 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <EmailForm onClose={() => setIsPopoverOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
