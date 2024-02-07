import Rating from "react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import { FaRegStar } from "react-icons/fa";

export default function Client() {
  return (
    <>
      <div className="py-20 px-5 hidden md:block max-w-7xl mx-auto">
        <div className="border  rounded-md">
          <div className=" bg-white dark:bg-slate-900 text-black dark:text-white p-10 flex items-center flex-col md:flex-row gap-10">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="md:w-1/2 lg:w-1/3"
            >
              <h3 className="text-tc-2 dark:text-tc-1 tracking-[5px] mb-3">
                TESTIMONIALS
              </h3>
              <h2 className="text-dark-01 dark:text-white text-4xl font-medium mb-2">
                Our Clients Reviews
              </h2>
              <div className="w-20 h-1.5 bg-tc-2 dark:bg-tc-1 mb-5 ml-2"></div>
              <p className="text-dark-02 dark:text-white">
                Real Stories, Memorable Stays: Hear What Our Client Have to Say
                About Their Unforgettable Service Experiences
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1700"
              className="w-2/3 hidden lg:block"
            >
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={2}
                pagination={{ clickable: true }}
                autoplay={true}
              >
                <SwiperSlide>
                  <div className="p-5 flex flex-col mr-4 relative mb-6">
                    <div className="flex justify-between items-end">
                      <FaQuoteRight className="text-5xl text-tc-2 dark:text-tc-1" />
                      <div className="flex">
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                      </div>
                    </div>
                    <p className="text-dark-02 dark:text-slate-300 my-3 text-justify flex-grow">
                      My stay was absolutely fantastic! The room was impeccably
                      clean and incredibly comfortable, and the staff was
                      exceptionally friendly and attentive. I felt right at home
                      from the moment I arrived. I can't wait to come back and
                      experience the hotel's hospitality again.
                    </p>
                    <div className="flex gap-3 items-center">
                      <img
                        className="w-12 h-11 rounded-full"
                        src="https://img.freepik.com/free-photo/blonde-woman-wearing-polka-dot-blouse_273609-19686.jpg?t=st=1707305335~exp=1707305935~hmac=6e845e528e38b2ab25e99d317bd3317a776c27198392572f6d1183ca54f88908"
                        alt=""
                      />
                      <div>
                        <h3 className="text-dark-01 dark:text-slate-200 text-lg font-semibold">
                          Jerry
                        </h3>
                        <h4 className="text-dark-02 dark:text-slate-400 text-sm">
                          Fast Agency
                        </h4>
                      </div>
                    </div>
                    <div className="absolute w-2 bg-base-300 rounded-lg h-4/5 -right-3 top-10"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 flex flex-col mr-4 relative mb-6">
                    <div className="flex justify-between items-end">
                      <FaQuoteRight className="text-5xl text-tc-2 dark:text-tc-1" />
                      <div className="flex">
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                      </div>
                    </div>
                    <p className="text-dark-02 dark:text-slate-300 my-3 text-justify flex-grow">
                      My stay was absolutely fantastic! The room was impeccably
                      clean and incredibly comfortable, and the staff was
                      exceptionally friendly and attentive. I felt right at home
                      from the moment I arrived. I can't wait to come back and
                      experience the hotel's hospitality again.
                    </p>
                    <div className="flex gap-3 items-center">
                      <img
                        className="w-12 h-11 rounded-full"
                        src="https://i.ibb.co/ph6X9G1/3.jpg"
                        alt=""
                      />
                      <div>
                        <h3 className="text-dark-01 dark:text-slate-200 text-lg font-semibold">
                          Sarah Parker
                        </h3>
                        <h4 className="text-dark-02 dark:text-slate-400 text-sm">
                          Romantic Getaway
                        </h4>
                      </div>
                    </div>
                    <div className="absolute w-2 bg-base-300 rounded-lg h-4/5 -right-3 top-10"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 flex flex-col mr-4 relative mb-6">
                    <div className="flex justify-between items-end">
                      <FaQuoteRight className="text-5xl text-tc-2 dark:text-tc-1" />
                      <div className="flex">
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                      </div>
                    </div>
                    <p className="text-dark-02 dark:text-slate-300 my-3 text-justify flex-grow">
                      My stay was absolutely fantastic! The room was impeccably
                      clean and incredibly comfortable, and the staff was
                      exceptionally friendly and attentive. I felt right at home
                      from the moment I arrived. I can't wait to come back and
                      experience the hotel's hospitality again.
                    </p>
                    <div className="flex gap-3 items-center">
                      <img
                        className="w-12 h-11 rounded-full"
                        src="https://i.ibb.co/fqHX6L4/1.jpg"
                        alt=""
                      />
                      <div>
                        <h3 className="text-dark-01 dark:text-slate-200 text-lg font-semibold">
                          Alice Johnson
                        </h3>
                        <h4 className="text-dark-02 dark:text-slate-400 text-sm">
                          Business Traveler
                        </h4>
                      </div>
                    </div>
                    <div className="absolute w-2 bg-base-300 rounded-lg h-4/5 -right-3 top-10"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="p-5 flex flex-col mr-4 relative mb-6">
                    <div className="flex justify-between items-end">
                      <FaQuoteRight className="text-5xl text-tc-2 dark:text-tc-1" />
                      <div className="flex">
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                        <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                      </div>
                    </div>
                    <p className="text-dark-02 dark:text-slate-300 my-3 text-justify flex-grow">
                      My stay was absolutely fantastic! The room was impeccably
                      clean and incredibly comfortable, and the staff was
                      exceptionally friendly and attentive. I felt right at home
                      from the moment I arrived. I can't wait to come back and
                      experience the hotel's hospitality again.
                    </p>
                    <div className="flex gap-3 items-center">
                      <img
                        className="w-12 h-11 rounded-full"
                        src="https://img.freepik.com/free-photo/blonde-woman-wearing-polka-dot-blouse_273609-19686.jpg?t=st=1707305335~exp=1707305935~hmac=6e845e528e38b2ab25e99d317bd3317a776c27198392572f6d1183ca54f88908"
                        alt=""
                      />
                      <div>
                        <h3 className="text-dark-01 dark:text-slate-200 text-lg font-semibold">
                          Jerry
                        </h3>
                        <h4 className="text-dark-02 dark:text-slate-400 text-sm">
                          Fast Agency
                        </h4>
                      </div>
                    </div>
                    <div className="absolute w-2 bg-base-300 rounded-lg h-4/5 -right-3 top-10"></div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* <div
              data-aos="fade-up"
              data-aos-duration="1700"
              className="w-[400px] sm:w-full md:w-1/2 block lg:hidden"
            >
              <SwiperSlide>
                <div className="p-5 flex flex-col mr-4 relative mb-6">
                  <div className="flex justify-between items-end">
                    <FaQuoteRight className="text-5xl text-dark-03" />
                    <div className="flex">
                      <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                      <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                      <FaRegStar className="text-3xl font-semibold text-yellow-500"></FaRegStar>
                    </div>
                  </div>
                  <p className="text-dark-02 my-3 text-justify flex-grow">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus totam ab distinctio rerum dignissimos maiores
                    nesciunt quod delectus mollitia recusandae.
                  </p>
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-12 h-11 rounded-full"
                      src="https://i.ibb.co/0MGkybP/rabby.jpg"
                      alt=""
                    />
                    <div>
                      <h3 className="text-dark-01 text-lg font-semibold">
                        Rabby
                      </h3>
                      <h4 className="text-dark-02 text-sm">Zulkar Naeem</h4>
                    </div>
                  </div>
                  <div className="absolute w-2 bg-base-300 rounded-lg h-4/5 -right-3 top-10"></div>
                </div>
              </SwiperSlide>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
