import { useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { TbMessageCirclePlus } from "react-icons/tb";
import EmailForm from "../pages/sections/ContactForm";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <>
      <footer className="relative mt-auto border-t border-brand-500/20 bg-black py-4 pt-10 text-center">
        {/* Theme-matched atmosphere: black + brand tint + soft grid */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(159,67,138,0.22),transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(159,67,138,0.08),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(159,67,138,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(159,67,138,0.16)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,#000_35%,transparent_100%)]" />
        </div>

        {/* Content */}
        <div className="relative flex z-10 sm:flex-row flex-col justify-between items-center ">
          <div className="w-2/6   items-center text-center hidden sm:block">
            <p className="text-xl w-full text-white ">
              © {new Date().getFullYear()} Tracy Shrestha Portfolio.
              <br />
              All rights reserved.
            </p>
          </div>
          <div className="flex w-2/6 flex-col  justify-center items-center pt-5 sm:pt-0 pb-2 text-white">
            <div className="text-xl font-bold pb-3 w-full text-left">
              <p className="text-center">Contacts</p>

              <hr className="border-white m-5 w-[60%] justify-center  mx-auto" />
            </div>

            <div className="flex flex-col justify-center align-center text-left">
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
            </div>
          </div>
          <div className="flex w-2/6 flex-col justify-center items-center pt-5 sm:pt-0 pb-2 text-white">
            <div className="text-xl font-bold pb-3 w-full text-left">
              <p className="text-center">Socials</p>

              <hr className="border-white m-5 w-[60%] justify-center  mx-auto" />
            </div>

            <div className="flex flex-col justify-center align-center text-left">
              <div
                className="flex  cursor-pointer"
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
                className="flex  cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/tracyshrestha", "_blank")
                }
              >
                <FaGithub className="mt-1" />
                <p className="pl-2">github.com/tracyshrestha</p>
              </div>
            </div>
          </div>
          <div className="w-2/6   items-center text-center  sm:hidden block mt-5">
            <p className="text-xl w-full text-white ">
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
          className="flex items-center gap-2 text-lg bg-[#9F438A] hover:bg-[#8A3878] text-white py-3 px-4 rounded-full shadow-lg transition-transform hover:scale-105"
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
