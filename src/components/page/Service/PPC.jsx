import { HiOutlineChevronDoubleRight } from "react-icons/hi";

export default function PPC() {
  return (
    <>
      <div class="w-full bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
        <a href="#">
          <img
            class="rounded-t-lg h-52 w-full object-cover"
            src="https://img.freepik.com/premium-photo/concept-pay-per-click-ppc-business-acronym-holographic-style_102583-6885.jpg?w=900"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pay-Per-Click Advertising (PPC):
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            PPC or pay-per-click is a type of internet marketing which involves
            advertisers paying a fee each time one of their ads is clicked.
            Simply, you only pay for advertising if your ad is actually clicked
            on.
          </p>

          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
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
        <dialog id="my_modal_2" className="modal ">
          <div className="modal-box bg-slate-200 dark:bg-dark-01 dark:text-white text-black m-0 p-2 rounded-lg">
            <h3 className="font-bold text-2xl text-violet-800 dark:text-purple-600">
              Pay-Per-Click Advertising (PPC):
            </h3>
            <div className="p-2 mb-1 mt-2 text-lg font-medium">
              <h3>
                PPC or pay-per-click is a type of internet marketing which
                involves advertisers paying a fee each time one of their ads is
                clicked. Simply, you only pay for advertising if your ad is
                actually clicked on.
              </h3>
            </div>
            <p className="py-4 text-lg">
              <span className="p-1 flex gap-3">
                <HiOutlineChevronDoubleRight className="text-4xl font-bold text-violet-800 dark:text-purple-600" />
                <div>
                  <span className="text-lg font-semibold">
                    Ad Campaign Management:
                  </span>{" "}
                  Create and manage PPC campaigns across platforms like Google
                  Ads, Bing Ads, and social media.
                </div>
              </span>
              <span className="p-1 flex gap-3">
                <HiOutlineChevronDoubleRight className="text-4xl font-bold text-violet-800 dark:text-purple-600" />
                <div>
                  <span className="text-lg font-semibold">
                    Keyword Selection:
                  </span>{" "}
                  Choose high-converting keywords and negative keywords to
                  optimize ad performance.
                </div>
              </span>
              <span className="p-1 flex gap-3">
                <HiOutlineChevronDoubleRight className="text-4xl font-bold text-violet-800 dark:text-purple-600" />
                <div>
                  <span className="text-lg font-semibold">Ad Copywriting:</span>{" "}
                  Craft compelling ad copy and creatives to drive clicks and
                  conversions.
                </div>
              </span>
              <span className="p-1 flex gap-3">
                <HiOutlineChevronDoubleRight className="text-4xl font-bold text-violet-800 dark:text-purple-600" />
                <div>
                  <span className="text-lg font-semibold">
                    Performance Tracking:
                  </span>{" "}
                  Monitor campaign metrics like click-through rate (CTR),
                  conversion rate, and return on ad spend (ROAS) to optimize
                  performance.
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