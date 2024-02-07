import { TbArrowRoundaboutRight } from "react-icons/tb";
import { FaFileDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Banner() {
  return (
    <>
      <div className=" ">
        <div class="absolute right-[18%] top-0 mr-28 h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
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
            <h2 className="dark:text-sky-500 text-indigo-600 text-3xl font-medium">
              Tanvir Ahmed Sohan
            </h2>
            <h2 className="dark:text-white text-3xl font-medium py-2">
              <span className="text-dark-03">I'm </span>
              {/* <span className="dark:text-purple-600 text-fuchsia-500">
                Digital Marketing Specialist
              </span> */}
              <span class="text-xl  text-center font-bold text-dark-03">
                <TypeAnimation
                  sequence={[
                    "Expert",
                    1000,
                    "Digital Marketer",
                    1000,
                    "SEO Expert",
                    1000,
                    "Full Stack ",
                    1000,
                  ]}
                  speed={50}
                  style={{ fontSize: "40px" }}
                  repeat={Infinity}
                />
              </span>
            </h2>
            <div className="flex gap-5 justify-center items-center md:justify-start md:items-start mt-2">
              <a
                href="#_"
                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-5 py-2 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
              >
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-lg">
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
