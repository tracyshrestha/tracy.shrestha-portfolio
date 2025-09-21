import { IoCallSharp } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { MdAttachEmail } from "react-icons/md";

function Contact() {
  return (
    <section className="text-white mx-12 items-center justify-center text-center">
      <h2 className="text-4xl font-semibold mb-8 text-white items-center justify-center text-center">
        Contact Me
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
        <div className="bg-[#46376d]/20 backdrop-blur-md border border-[#46376d]/30 rounded-lg p-6 shadow-xl hover:bg-[#46376d]/30 hover:border-[#46376d]/40 transition-all duration-300 group">
          <div className="flex w-full  flex-col justify-center items-center pt-5 sm:pt-0 pb-2 text-white">
            <div className="text-xl font-bold pb-3 w-full text-left">
              <p className="text-center">Contact Me</p>

              <hr className="border-white m-5  w-full" />
            </div>

            <div className="flex flex-col justify-center align-center text-left">
              <div className=" flex">
                <IoCallSharp />
                <p className=" pl-2">98</p>
              </div>
              <div className=" flex">
                <CgWebsite />
                <p className=" pl-2">
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/tracyshrestha",
                        "_blank",
                      )
                    }
                  >
                    linkedin.com/in/tracyshrestha
                  </button>
                </p>
              </div>
              <div
                className=" flex cursor-pointer"
                onClick={() =>
                  (window.location.href = "mailto:tracysh99@gmail.com")
                }
              >
                <MdAttachEmail />
                <p className="pl-2">tracysh99@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
