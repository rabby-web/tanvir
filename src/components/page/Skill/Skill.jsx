import SectionTitle from "../../SectionTitle/SectionTitle";
import Test from "./Test";

export default function Skill() {
  return (
    <>
      <SectionTitle heading="Skill" subHeading="Whats new"></SectionTitle>

      <div className="py-8 my-8 px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
          <div
            className="text-2xl text-center border p-4 rounded-md bg-slate-100 dark:bg-slate-900"
            data-aos="flip-up"
          >
            <div className="flex justify-between gap-3  items-center dark:text-tc-1 text-tc-2">
              <h2 className="">SEO</h2>
              <p>98%</p>
            </div>
            <progress
              className="progress progress-primary w-full "
              value="98"
              max="100"
            ></progress>
          </div>
          <div
            className="text-2xl text-center border p-4 rounded-md bg-slate-100 dark:bg-slate-900"
            data-aos="flip-up"
          >
            <div className="flex justify-between gap-3  items-center dark:text-tc-1 text-tc-2">
              <h2 className="">Content Marketing</h2>
              <p>99%</p>
            </div>
            <progress
              className="progress progress-primary w-full "
              value="99"
              max="100"
            ></progress>
          </div>
          <div
            className="text-2xl text-center border p-4 rounded-md bg-slate-100 dark:bg-slate-900"
            data-aos="flip-up"
          >
            <div className="flex justify-between gap-3  items-center dark:text-tc-1 text-tc-2">
              <h2 className="">Email Marketing</h2>
              <p>98%</p>
            </div>
            <progress
              className="progress progress-primary w-full "
              value="98"
              max="100"
            ></progress>
          </div>
          <div
            className="text-2xl text-center border p-4 rounded-md bg-slate-100 dark:bg-slate-900"
            data-aos="flip-up"
          >
            <div className="flex justify-between gap-3  items-center dark:text-tc-1 text-tc-2">
              <h2 className="">Social Media Marketing</h2>
              <p>100%</p>
            </div>
            <progress
              className="progress progress-primary w-full "
              value="100"
              max="100"
            ></progress>
          </div>
          <div
            className="text-2xl text-center border p-4 rounded-md bg-slate-100 dark:bg-slate-900"
            data-aos="flip-up"
          >
            <div className="flex justify-between gap-3  items-center dark:text-tc-1 text-tc-2">
              <h2 className="">Email Marketing</h2>
              <p>98%</p>
            </div>
            <progress
              className="progress progress-primary w-full "
              value="98"
              max="100"
            ></progress>
          </div>
          <div
            className="text-2xl text-center border p-4 rounded-md bg-slate-100 dark:bg-slate-900"
            data-aos="flip-up"
          >
            <div className="flex justify-between gap-3  items-center dark:text-tc-1 text-tc-2">
              <h2 className="">Paid Advertising</h2>
              <p>99%</p>
            </div>
            <progress
              className="progress progress-primary w-full "
              value="99"
              max="100"
            ></progress>
          </div>
          <div
            className="text-2xl text-center border p-4 rounded-md bg-slate-100 dark:bg-slate-900"
            data-aos="flip-up"
          >
            <div className="flex justify-between gap-3  items-center dark:text-tc-1 text-tc-2">
              <h2 className="">Analytics and Data Analysis</h2>
              <p>100%</p>
            </div>
            <progress
              className="progress progress-primary w-full "
              value="100"
              max="100"
            ></progress>
          </div>
          <div
            className="text-2xl text-center border p-4 rounded-md bg-slate-100 dark:bg-slate-900"
            data-aos="flip-up"
          >
            <div className="flex justify-between gap-3  items-center dark:text-tc-1 text-tc-2">
              <h2 className="">Digital Strategy</h2>
              <p>97%</p>
            </div>
            <progress
              className="progress progress-primary w-full "
              value="97"
              max="100"
            ></progress>
          </div>
          <div
            className="text-2xl text-center border p-4 rounded-md bg-slate-100 dark:bg-slate-900"
            data-aos="flip-up"
          >
            <div className="flex justify-between gap-3  items-center dark:text-tc-1 text-tc-2">
              <h2 className="">Graphic Design & CMS</h2>
              <p>90%</p>
            </div>
            <progress
              className="progress progress-primary w-full "
              value="90"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </>
  );
}
