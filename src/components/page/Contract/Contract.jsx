import { FaPaperPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import SectionTitle from "../../SectionTitle/SectionTitle";

export default function Contract() {
  return (
    <>
      <SectionTitle heading="Contact" subHeading="Lets Go"></SectionTitle>
      <div>
        <div className="px-5">
          <div className="max-w-7xl mx-auto p-10 my-20 flex flex-col-reverse md:flex-row gap-6 items-center shadow-md rounded-lg border border-gray-200">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="md:w-1/2"
            >
              <h2 className="text-dark-01 dark:text-white font-semibold text-3xl md:text-4xl mb-2">
                Subscribe now
              </h2>
              <div className="w-20 h-1.5 bg-dark-03 mb-5 ml-2"></div>
              <p className="text-dark-02 dark:text-white text-lg mb-5">
                Get latest updates, deals, and exclusive offers Every time.
              </p>
              <form>
                <input
                  className="py-3 px-5 bg-gray-100 border border-gray-200 w-full rounded outline-none mb-4"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  id=""
                />
                <input
                  className="py-3 px-5 bg-gray-100 border border-gray-200 w-full rounded outline-none mb-4"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  id=""
                />
                <button
                  className="py-3 px-10 text-white bg-dark-03 rounded inline-flex gap-3 items-center"
                  type="submit"
                >
                  Subscribe <FaPaperPlane></FaPaperPlane>
                </button>
              </form>
            </div>
            <div className="divider lg:divider-horizontal dark:text-white">
              OR
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="md:w-1/2 p-10"
            >
              <h2 className="text-dark-01 dark:text-white font-semibold text-3xl md:text-4xl mb-2">
                Contract now
              </h2>
              <div className="w-20 h-1.5 bg-dark-03 dark:text-white mb-5 ml-2"></div>
              <div className="flex gap-3 font-medium text-xl items-center ">
                <FaWhatsapp className="text-dark-03 dark:text-white text-3xl" />
                <a className="text-dark-01 dark:text-white" href="#">
                  01590040222
                </a>
              </div>
              <div className="flex gap-3 font-medium text-xl items-center ">
                <MdEmail className="text-dark-03 dark:text-white text-3xl" />
                <a
                  className="text-dark-01 dark:text-white"
                  href="mailto:rabby-webdeveloper@gmail.com"
                >
                  rabby-webdeveloper@gmail.com
                </a>
              </div>
              <div className="flex-1">
                <h2 className="text-dark-01 dark:text-white font-semibold text-3xl md:text-4xl mb-2 mt-2">
                  Social Link
                </h2>
                <div className="text-dark-03 dark:text-white flex  gap-4 mt-4">
                  <a href="https://github.com/rabby-web">
                    <div className="flex items-center justify-center gap-2 border rounded px-2 py-1">
                      <FaGithub />
                      <h2>GitHub</h2>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/rabby-web/">
                    <div className="flex items-center justify-center gap-2 border rounded px-2 py-1">
                      <FaLinkedin />

                      <h2>Linkedin</h2>
                    </div>
                  </a>
                  <a href="https://www.facebook.com/ridoy.babu.3538">
                    <div className="flex items-center justify-center gap-2 border rounded px-2 py-1">
                      <FaFacebook />
                      <h2>Facebook</h2>
                    </div>
                  </a>
                </div>
              </div>
              {/* <div className="flex gap-3 font-medium text-xl items-center ">
              <FaLinkedin className="text-dark-03 dark:text-white text-3xl" />
              <a
                className="text-dark-01 dark:text-white"
                href="mailto:rabby-webdeveloper@gmail.com"
              >
                Linkedin
              </a>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
