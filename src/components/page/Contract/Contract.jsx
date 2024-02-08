import { FaPaperPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { FaSkype } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contract() {
  const [sending, setSending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // const toastId = toast.loading("Sending ...");
    // setSending(true);
    const from_name = e.target.name.value;
    const from_mail = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    const mail = { from_name, from_mail, subject, message };
    console.log(mail);
    emailjs
      .send("service_kcdoef8", "template_7rgbkeh", mail, "UmROyUsv9bz4ZDlfC")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSending(false);
          // toast.success("Send Success", { id: toastId });
          Swal.fire({
            title: "Good job!",
            text: "Successfully Send SMS",
            icon: "success",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setSending(false);
          // toast.error("Send Failed", { id: toastId });
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      );
    e.target.reset();
  };
  return (
    <>
      <SectionTitle
        heading="Contact"
        subHeading="contact with me"
      ></SectionTitle>
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
              <div className="w-20 h-1.5 bg-tc-2 dark:bg-tc-1 mb-5 ml-2"></div>
              <p className="text-dark-02 dark:text-white text-lg mb-5">
                Get latest updates, deals, and exclusive offers Every time.
              </p>
              <form onSubmit={handleSubmit}>
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
                <input
                  className="py-3 px-5 bg-gray-100 border border-gray-200 w-full rounded outline-none mb-4"
                  type="text"
                  name="subject"
                  placeholder="Your Subject"
                  id=""
                />
                <textarea
                  className="py-3 px-5 bg-gray-100 border border-gray-200 w-full rounded outline-none mb-4"
                  name="message"
                  placeholder="Your SMS"
                  id=""
                  cols="30"
                  rows="4"
                ></textarea>
                {/* {!sending ? (
                  <button
                    type="submit"
                    className="bg-yellow-20 rounded w-80 py-3 text-white uppercase font-medium"
                  >
                    Send Message
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled
                    style={{ opacity: 0.6, cursor: "not-allowed" }}
                    className="bg-white text-black rounded w-80 py-3 uppercase font-medium"
                  >
                    Sending ...
                  </button>
                )} */}
                <button
                  className="py-3 px-10 text-white bg-tc-2 dark:bg-tc-1 rounded inline-flex gap-3 items-center"
                  type="submit"
                >
                  Send SMS <FaPaperPlane></FaPaperPlane>
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
                Contacts now
              </h2>
              <div className="w-20 h-1.5 bg-tc-2 dark:bg-tc-1 dark:text-white mb-5 ml-2"></div>
              <div className="flex gap-3 font-medium text-xl items-center ">
                <FaWhatsapp className="text-tc-2 dark:text-white text-3xl" />
                <a
                  className="text-dark-01 dark:text-white"
                  href="tel:+8801823200465"
                >
                  +8801823200465
                </a>
              </div>
              <div className="flex gap-3 font-medium text-xl items-center ">
                <MdEmail className="text-tc-2 dark:text-white text-3xl" />
                <a
                  className="text-dark-01 dark:text-white"
                  href="mailto:tanvirahmed9112@gmail.com"
                >
                  tanvirahmed9112@gmail.com
                </a>
              </div>
              <div className="flex-1">
                <h2 className="text-dark-01 dark:text-white font-semibold text-3xl md:text-4xl mb-2 mt-2">
                  Social Link
                </h2>
                <div className="text-tc-2 dark:text-white flex flex-col md:flex-row  gap-4 mt-4">
                  <a href="https://join.skype.com/invite/uZuOjNz72XNfv">
                    <div className="flex items-center justify-center gap-2 border rounded px-2 py-1">
                      <FaSkype />
                      <h2>Skype</h2>
                    </div>
                  </a>
                  <a href="https://join.skype.com/invite/uZuOjNz72XNfv">
                    <div className="flex items-center justify-center gap-2 border rounded px-2 py-1">
                      <FaLinkedin />

                      <h2>Linkedin</h2>
                    </div>
                  </a>
                  <a href="https://web.facebook.com/profile.php?id=61553791477478&mibextid=kFxxJD&_rdc=1&_rdr">
                    <div className="flex items-center justify-center gap-2 border rounded px-2 py-1">
                      <FaFacebook />
                      <h2>Facebook</h2>
                    </div>
                  </a>
                </div>
              </div>
              {/* <div className="flex gap-3 font-medium text-xl items-center ">
              <FaLinkedin className="text-tc-1 dark:text-white text-3xl" />
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
