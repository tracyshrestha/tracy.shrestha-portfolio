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
      <footer className="bg-black text-center py-4 mt-auto border-t relative pt-10">
        {/* Grid background */}
        <div className="absolute inset-0 h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
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
