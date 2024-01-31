import { TbArrowRoundaboutRight } from "react-icons/tb";
import { FaFileDownload } from "react-icons/fa";

export default function Banner() {
  return (
    <>
      <div>
        {/* grid */}
        <div className="md:flex items-center py-4">
          <div className="flex-1">
            <img
              src="https://i.ibb.co/cJYRjYG/rabby-protfolio-removebg-preview.png"
              alt=""
              className="w-96 h-96 mx-auto"
            />
          </div>
          <div className="flex-1 text-center md:text-left space-y-2">
            <h4 className="text-dark-01 dark:text-white">Hello, this is</h4>
            <h2 className="text-dark-03 text-3xl font-medium">
              Tanvir Hossain
            </h2>
            <h2 className="dark:text-white text-3xl font-medium">
              And I'm{" "}
              <span className="dark:text-[#9C1291] text-[#134699]">
                Digital Marketing Specialist
              </span>
            </h2>
            <div className="flex gap-5 justify-center items-center md:justify-start md:items-start">
              {/* <button classNameName="py-3 px-5 border my-2 text-lg rounded bg-dark-01 dark:bg-dark-03 text-white">
                About Me
              </button> */}
              {/* <a href="https://drive.google.com/uc?export=download&id=1M9xARPrlfW8IQtDjb4aNNIVpStLsEPuH">
                <button classNameName="py-3 px-5 border my-2 text-lg rounded bg-dark-01 dark:bg-dark-03 text-white">
                  Download Resume
                </button>
              </a> */}
              <a
                href="#_"
                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-5 py-2 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
              >
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-lg">
                  {/* <svg
                    className="relative w-5 h-5 mr-2 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg> */}
                  <TbArrowRoundaboutRight className="text-xl mr-2" />
                  About Me
                </span>
              </a>
              <a
                href="#_"
                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-5 py-2 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
              >
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-lg">
                  <FaFileDownload className="text-xl mr-2" />
                  Download CV
                </span>
              </a>
              {/* <Download></Download> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
