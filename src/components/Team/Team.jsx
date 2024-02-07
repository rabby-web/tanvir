import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Team = () => {
  return (
    <div
      className="bg-white dark:bg-[#0F172A] my-10 mx-2 rounded-md border"
      data-aos="flip-up"
    >
      <h2 className="text-4xl  pt-10 dark:text-purple-600 text-fuchsia-500 font-bold text-center sm:text-5xl ">
        Our Team Member
      </h2>
      <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10 ">
        <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
          {/* <div
            className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 hover:text-white xl:w-64 dark:bg-white hover:bg-tc-2 dark:hover:bg-tc-1  transition duration-700 dark:text-gray-800 aos-init aos-animate"
            data-aos="zoom-in"
          >
            <img
              src="https://devconfbd.com/_next/image?url=%2Fimages%2Fspeakers%2Fnayem.png&w=384&q=75"
              className="self-center flex-shrink-0 w-32 h-32 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              alt=""
            />
            <div>
              <p className="text-2xl font-semibold">HM Nayem</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
              <h2 className="text-xl font-medium">
                Founder & Educator, Stack Learner
              </h2>
            </div>
          </div>
          <div
            className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 hover:text-white xl:w-64 dark:bg-white  hover:bg-tc-2 dark:hover:bg-tc-1  transition duration-700 dark:text-gray-800 aos-init aos-animate"
            data-aos="zoom-in"
          >
            <img
              src="https://devconfbd.com/_next/image?url=%2Fimages%2Fspeakers%2Fhasin-vai.png&w=384&q=75"
              className="self-center flex-shrink-0 w-32 h-32 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              alt=""
            />
            <div>
              <p className="text-2xl font-semibold">Hasin Hayder</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
              <h2 className="text-xl font-medium">
                Founder & Educator, Learn With Hasin Hayder
              </h2>
            </div>
          </div>
          <div
            className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 hover:text-white xl:w-64 dark:bg-white hover:bg-tc-2 dark:hover:bg-tc-1  transition duration-700 dark:text-gray-800 aos-init aos-animate"
            data-aos="zoom-in"
          >
            <img
              src="https://devconfbd.com/_next/image?url=%2Fimages%2Fspeakers%2Fmamun-abdullah.png&w=384&q=75"
              className="self-center flex-shrink-0 w-32 h-32 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              alt=""
            />
            <div>
              <p className="text-2xl font-semibold">Abdullah Al Mamun</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
              <h2 className="text-xl font-medium">
                Machine Learning Engineer at Meta
              </h2>
            </div>
          </div> */}
          <div
            className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 bg-slate-100 hover:text-white xl:w-64 dark:bg-white hover:bg-tc-2 dark:hover:bg-tc-1  transition duration-700 dark:text-gray-800 text-gray-900 aos-init aos-animate"
            data-aos="zoom-in"
          >
            <img
              src="https://i.ibb.co/tCvHY8t/dsr.jpg"
              className="self-center flex-shrink-0 w-32 h-32 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              alt=""
            />
            <div>
              <p className="text-2xl font-semibold">Tanvir Ahmed</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
              <h2 className="text-xl font-medium">
                Digital Marketing Specialist
              </h2>
            </div>
          </div>
          <div
            className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 bg-slate-100 hover:text-white xl:w-64 dark:bg-white hover:bg-tc-2 dark:hover:bg-tc-1  transition duration-700 dark:text-gray-800 text-gray-900 aos-init aos-animate"
            data-aos="zoom-in"
          >
            <img
              src="https://i.ibb.co/n6Xv85m/sds.jpg"
              className="self-center flex-shrink-0 w-32 h-32 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              alt=""
            />
            <div>
              <p className="text-2xl font-semibold">Rashed Islam</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
              <h2 className="text-xl font-medium">
                Full Stack Digital Marketer
              </h2>
            </div>
          </div>
          <div
            className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 hover:text-white xl:w-64 dark:bg-white hover:bg-tc-2 dark:hover:bg-tc-1  transition duration-700 dark:text-gray-800 aos-init aos-animate bg-slate-100 text-gray-900"
            data-aos="zoom-in"
          >
            <img
              src="https://i.ibb.co/0MGkybP/rabby.jpg"
              className="self-center flex-shrink-0 w-32 h-32 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              alt=""
            />
            <div>
              <p className="text-2xl font-semibold">Zulkar Naeem</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
              <h2 className="text-xl font-medium">Full Stack Web Engineer</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
