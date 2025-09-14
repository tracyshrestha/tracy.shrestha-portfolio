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
      <footer className="bg-black text-center py-4 mt-auto border-t relative">
        {/* Grid background */}
        <div className="absolute inset-0 h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="absolute -top-5 right-10 z-50">
          <button
            onClick={() => setIsPopoverOpen(true)}
            className="flex text-xl bg-[#974087] hover:bg-[#873979] text-white py-1 px-3 rounded-full shadow-lg transition"
            title="Send Message"
          >
            <TbMessageCirclePlus className="mt-1" />
            &nbsp;Message Me
          </button>
        </div>

        {/* Content */}
        <div className="relative flex z-10">
          <div className="w-2/6 flex  items-center text-center">
            <p className="text-xl w-full text-white ">
              © {new Date().getFullYear()} Tracy Shrestha Portfolio.
              <br />
              All rights reserved.
            </p>
          </div>
          <div className="flex w-2/6 flex-col justify-center items-center pt-5 sm:pt-0 pb-2 text-white">
            <div className="text-xl font-bold pb-3 w-full text-left">
              <p className="text-center">Contacts</p>

              <hr className="border-white m-5 w-[60%] justify-center  mx-auto" />
            </div>

            <div className="flex flex-col justify-center align-center text-left">
              <div className="flex">
                <IoCallSharp />
                <p className="pl-2">98</p>
              </div>

              <div
                className="flex cursor-pointer"
                onClick={() =>
                  (window.location.href = "mailto:tracysh99@gmail.com")
                }
              >
                <MdAttachEmail />
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
                    "_blank"
                  )
                }
              >
                <FaLinkedin />
                <p className="pl-2">linkedin.com/in/tracyshrestha</p>
              </div>
              <div
                className="flex  cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/tracyshrestha",
                    "_blank"
                  )
                }
              >
                <FaGithub />
                <p className="pl-2">linkedin.com/in/tracyshrestha</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {isPopoverOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
            <EmailForm onClose={() => setIsPopoverOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
