import React from "react";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const FooterList = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-[30%_20%_12%_10%_10%] mb-[30px] lg:border-b lg:border-b-[rgba(152,154,169,0.6)] lg:gap-x-[46px] justify-between p-[30px] ">
          <div className="mb-[54px] ">
            <img src="assets/img/Logo.svg" alt="img" className="mb-[30px]" />
            <p className="text-[#82869A] font-normal font-inter text-[16px] w-[85%] mb-[54px]">
              Proin et magna blandit arcu pellentes sceleri sit amet a sapien.
              Aenean purus nunc cursus in ante in, vehicula facilisis{" "}
            </p>
          </div>
          <div className="mb-[54px]">
            <span className="font-bold font-roboto text-[20px] text-[#FFFFFF] ">
              Keep in touch
            </span>
            <ul className="text-[#82869A] font-normal font-inter text-[16px] mt-[20px]">
              <li className="lg:w-[115%] mb-[10px]">
                768 Market Street San Francisco, CA 64015, United States
              </li>
              <li className=" mb-[10px]">info@filmina.com</li>
              <li className=" mb-[10px]">(+021) 345 678 910</li>
            </ul>
          </div>
          <div className="mb-[54px]">
            <span className="font-bold font-roboto text-[20px] text-[#FFFFFF] ">
              Services
            </span>
            <ul className="text-[#82869A] font-normal font-inter text-[16px] mt-[20px]">
              <li className=" mb-[10px]">Movie production</li>
              <li className=" mb-[10px]">Movie directing</li>
              <li className=" mb-[10px]">High quality work</li>
              <li className=" mb-[10px]">Sound effect</li>
              <li className=" mb-[10px]">Live streaming</li>
            </ul>
          </div>
          <div className="mb-[54px]">
            <span className="font-bold font-roboto text-[20px] text-[#FFFFFF] ">
              Quick links
            </span>
            <ul className="text-[#82869A] font-normal font-inter text-[16px] mt-[20px]">
              <li className=" mb-[10px]">About</li>
              <li className=" mb-[10px]">Services</li>
              <li className=" mb-[10px]">Works</li>
              <li className=" mb-[10px]">Blog</li>
              <li className=" mb-[10px]">Testimonials</li>
            </ul>
          </div>
          <div className="mb-[54px]">
            <span className="font-bold font-roboto text-[20px] text-[#FFFFFF] ">
              Services
            </span>
            <ul className="text-[#82869A] font-normal font-inter text-[16px] mt-[20px]">
              <li className=" mb-[10px]">Help center</li>
              <li className=" mb-[10px]">Disclaimer</li>
              <li className=" mb-[10px]">FAQs</li>
              <li className=" mb-[10px]">Contact</li>
              <li className=" mb-[10px]">Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="mb-[54px] flex-nowrap lg:flex items-center justify-around">
          <p className="text-[#82869A] font-normal font-inter text-[16px] text-center">
            © 2023 Filmina. Designed by ThemeWarrior
          </p>
          <div className="flex items-center justify-center space-x-[30px] mt-6 lg:mt-0">
            <FaFacebookF className="text-[#82869A]" />
            <IoLogoTwitter className="text-[#82869A]" />
            <FaInstagram className="text-[#82869A]" />
            <FaYoutube className="text-[#82869A]" />
            <IoLogoLinkedin className="text-[#82869A]" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default FooterList;
