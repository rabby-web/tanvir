import {
  FaGithub,
  FaAngleRight,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <SectionTitle heading="About" subHeading="Lets Go"></SectionTitle>
      <div id="about" className=" pt-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="w-20 h-1.5 bg-yellow-20 my-5 mx-auto"></div>
          <div className=" flex gap-12 py-16 items-center px-5 flex-col md:flex-row">
            <div
              className="md:border border-yellow-20 p-3 relative w-full md:w-2/5 lg:w-1/2 ml-5 md:mr-5"
              data-aos="flip-up"
            >
              <img
                className="hidden md:block"
                src="https://i.ibb.co/VHwFY38/tr.jpg"
                alt="2151005751"
              />
              {/* <div className="-mt-16 mx-auto md:absolute top-10 -right-6 w-48 md:w-28 lg:w-40 border-8 border-yellow-20 rounded-full overflow-hidden z-10">
                <img
                  className="scale-[1.6]"
                  src="https://img.freepik.com/free-vector/flat-electronics-logo-templates_23-2148967495.jpg?w=740&t=st=1707327267~exp=1707327867~hmac=6f64869bd2d3e38e7c6bfed0adaf37c8501a28d9fcc2c3e26e2063131f372e02"
                  alt=""
                />
              </div> */}
            </div>
            <div
              className=" text-center md:text-left w-full md:w-3/5 lg:w-1/2 md:mt-6"
              data-aos="flip-down"
            >
              <h3 className="text-yellow-20 tracking-[5px] mb-3 dark:text-tc-1 text-tc-2">
                WELCOME TO MY WEBSITE
              </h3>

              <h2 className="text-3xl   font-semibold py-2 bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-400 inline-block text-transparent bg-clip-text">
                <TypeAnimation
                  sequence={[
                    "A LITTLE BIT ABOUT ME",
                    1000,
                    "Tanvir Ahmed Sohan",
                    1000,
                  ]}
                  speed={50}
                  style={{ fontSize: "40px" }}
                  repeat={Infinity}
                />
              </h2>
              <div className="w-20 mx-auto md:mx-0 h-1.5 bg-yellow-20 my-5"></div>
              <div className="text-slate-800 dark:text-white mb-8">
                <p className="text-xl   font-semibold py-2 bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-400 inline-block text-transparent bg-clip-text">
                  Welcome to Tanvir Ahmed's Digital Marketing Universe!
                </p>

                <p>
                  Hello there! I'm Tanvir Ahmed, A passionate digital marketer
                  with a knack for turning pixels into performance. I thrive in
                  the dynamic world of online marketing, where creativity meets
                  analytics to drive tangible results.
                </p>
              </div>
              <div className="flex gap-3 items-center justify-center lg:justify-normal text-[#bfbecb] flex-col md:flex-row">
                <p className="text-yellow-20 mb-5 md:mb-0 text-slate-800 dark:text-white">
                  Connect with
                </p>
                <div className="hidden md:block h-[1px] w-20 bg-[#bfbecb] mt-1"></div>
                <FaAngleRight className="hidden md:block -ml-6 mt-1" />

                <div className=" flex gap-3 items-center ">
                  <li className="list-none">
                    <a
                      className=" bg-transparent inline-block p-2 border border-tc-2 dark:border-tc-1 dark:text-tc-1 text-tc-2 rounded hover:shadow hover:shadow-yellow-20 duration-300"
                      href="https://www.linkedin.com/in/tanvir-ahmed-493aaa233/"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li className="list-none">
                    <a
                      className=" bg-transparent inline-block p-2 border border-tc-2 dark:border-tc-1 dark:text-tc-1 text-tc-2 rounded hover:shadow hover:shadow-yellow-20 duration-300"
                      href="https://twitter.com/Tanvir_Ahmed65"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="list-none">
                    <a
                      className=" bg-transparent inline-block p-2 border border-tc-2 dark:border-tc-1 dark:text-tc-1 text-tc-2 rounded hover:shadow hover:shadow-yellow-20 duration-300"
                      href="https://web.facebook.com/profile.php?id=61553791477478&mibextid=kFxxJD&_rdc=1&_rdr"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
