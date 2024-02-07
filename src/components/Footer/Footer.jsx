import { Link } from "react-router-dom";
import { BsFillEnvelopeAtFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaSkype } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Footer = () => {
  return (
    <div
      className="bg-[url(https://i.ibb.co/YX2wtZJ/bg-footer1.jpg)] bg-cover pt-20 pb-5 -mb-6"
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="px-5 lg:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 border-b pb-6 border-gray-500">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex  items-end gap-4">
              <img
                className="w-12 md:w-[60px]"
                src="https://i.ibb.co/8YwLmY0/6996098-removebg-preview.png"
                alt=""
              />
              <h2 className="text-2xl font-semibold text-tc-1 hover:text-tc-2">
                Tanvir{" "}
              </h2>
            </div>
            <p className=" text-[#FFFFFFB2] mt-4">
              {"I'm"} a passionate Digital Marketer with a love for creating
              seamless user experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-8">
              Useful Links
            </h3>
            <ul>
              <li className=" mb-3 lg:mb-0">
                <Link
                  className="text-sm hover:underline text-[#ffffffb2]"
                  to="about"
                >
                  About
                </Link>
              </li>
              <li className=" mb-3 lg:mb-0">
                <Link
                  className="text-sm hover:underline text-[#ffffffb2]"
                  to="skill"
                >
                  Skills
                </Link>
              </li>
              <li className=" mb-3 lg:mb-0">
                <Link
                  className="text-sm hover:underline text-[#ffffffb2]"
                  to="Service"
                >
                  Service
                </Link>
              </li>
              <li className=" mb-3 lg:mb-0">
                <Link
                  className="text-sm hover:underline text-[#ffffffb2]"
                  to="project"
                >
                  Projects
                </Link>
              </li>
              <li className=" mb-3 lg:mb-0">
                <Link
                  className="text-sm hover:underline text-[#ffffffb2]"
                  to="contract"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-8">Support</h3>
            <p className="text-[#FFFFFFB2] mb-2 text-sm">Resources</p>
            <p className="text-[#FFFFFFB2] mb-2 text-sm">Faqs </p>
            <p className="text-[#FFFFFFB2] mb-2 text-sm">Privacy Policy</p>
            <p className="text-[#FFFFFFB2] mb-2 text-sm">Careers</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-8">
              Our Contact
            </h3>
            <a
              href="mailto:tanvirahmed9112@gmail.com"
              className="text-[#FFFFFFB2] mb-3 text-sm flex items-center gap-2 hover:underline"
            >
              <BsFillEnvelopeAtFill className="text-lg text-tc-1 hover:text-tc-2" />
              tanvirahmed9112@gmail.com
            </a>
            <a
              href="tel:+8801823200465"
              className="text-[#FFFFFFB2] mb-3 text-sm flex items-center gap-2 hover:underline"
            >
              <BsFillTelephoneFill className="text-lg text-tc-1 hover:text-tc-2" />
              +8801823200465
            </a>
            <a
              href=""
              className="text-[#FFFFFFB2] mb-6 text-sm flex items-center gap-2"
            >
              <FaLocationDot className="text-xl text-tc-1 hover:text-tc-2" />
              Rangpur City in Bangladesh
            </a>
          </div>
        </div>
        <div className="py-6 flex justify-between px-5 lg:px-0">
          <p className="text-[#FFFFFFB2] text-center">
            Copyright © 2023 Tanvir Ahmed Sohan. All Rights Reserved.
          </p>
          <div className="text-[#FFFFFFB2] text-2xl hidden md:flex gap-4">
            <Link
              to="https://www.instagram.com/tanvir.ahmed_sohan?igsh=bWUyY2x3azBsNXBz"
              className="text-tc-1 hover:text-tc-2"
            >
              <AiOutlineInstagram />
            </Link>
            <Link
              to="https://web.facebook.com/profile.php?id=61553791477478&mibextid=kFxxJD&_rdc=1&_rdr"
              className="text-tc-1 hover:text-tc-2"
            >
              <AiFillFacebook />
            </Link>
            <Link
              to="https://twitter.com/Tanvir_Ahmed65"
              className="text-tc-1 hover:text-tc-2"
            >
              <AiOutlineTwitter />
            </Link>
            <Link
              to="https://www.linkedin.com/in/tanvir-ahmed-493aaa233/"
              className="text-tc-1 hover:text-tc-2"
            >
              <AiFillLinkedin />
            </Link>
            <Link
              to="https://join.skype.com/invite/uZuOjNz72XNfv"
              className="text-tc-1 hover:text-tc-2"
            >
              <FaSkype />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
