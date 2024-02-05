import { HiOutlineChevronDoubleRight } from "react-icons/hi";

export default function SMM() {
  return (
    <>
      <div class="w-full bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
        <a href="#">
          <img
            class="rounded-t-lg h-52 w-full object-cover"
            src="https://img.freepik.com/premium-photo/social-media-marketing-with-social-icons-around-tech-background-3d_327483-586.jpg?size=626&ext=jpg&ga=GA1.1.1163622796.1693601594&semt=sph"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Social Media Marketing (SMM):
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Social Media Marketing (SMM) is marketing that targets social
            platforms like Facebook, Instagram, TikTok for brand promotion,
            target audience growth, driving website traffic, and increasing
            sales.
          </p>

          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <a
              href="#_"
              class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Details
              </span>
            </a>
          </button>
        </div>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box bg-slate-200 dark:bg-dark-01 dark:text-white text-black m-0 p-2 rounded-lg">
            <h3 className="font-bold text-2xl text-violet-800 dark:text-purple-600">
              Social Media Marketing (SMM):
            </h3>
            <div className="p-2 mb-1 mt-2 text-lg font-medium">
              <h3>
                Social Media Marketing (SMM) is marketing that targets social
                platforms like Facebook, Instagram, TikTok for brand promotion,
                target audience growth, driving website traffic, and increasing
                sales.
              </h3>
            </div>
            <p className="py-4 text-lg">
              <span className="p-1 flex gap-3">
                <HiOutlineChevronDoubleRight className="text-4xl font-bold text-violet-800 dark:text-purple-600" />
                <div>
                  <span className="text-lg font-semibold">
                    Profile Setup and Optimization:
                  </span>{" "}
                  Establish and optimize social media profiles on platforms
                  relevant to your business.
                </div>
              </span>
              <span className="p-1 flex gap-3">
                <HiOutlineChevronDoubleRight className="text-4xl font-bold text-violet-800 dark:text-purple-600" />
                <div>
                  <span className="text-lg font-semibold">
                    Content Creation:
                  </span>{" "}
                  Develop engaging content, including images, videos, and posts,
                  tailored to your audience and brand voice.
                </div>
              </span>
              <span className="p-1 flex gap-3">
                <HiOutlineChevronDoubleRight className="text-4xl font-bold text-violet-800 dark:text-purple-600" />
                <div>
                  <span className="text-lg font-semibold">
                    Community Management:
                  </span>{" "}
                  Engage with your audience, respond to comments and messages,
                  and build relationships with followers.
                </div>
              </span>
              <span className="p-1 flex gap-3">
                <HiOutlineChevronDoubleRight className="text-4xl font-bold text-violet-800 dark:text-purple-600" />
                <div>
                  <span className="text-lg font-semibold">
                    Paid Social Advertising:
                  </span>{" "}
                  Run targeted ad campaigns on platforms like Facebook,
                  Instagram, Twitter, and LinkedIn to reach specific
                  demographics and increase brand visibility.
                </div>
              </span>
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn bg-violet-700 dark:bg-purple-600 text-white -mt-2">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}
