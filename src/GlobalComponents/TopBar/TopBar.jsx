import React from "react";
import { FaFacebookF } from "react-icons/fa";
import Container from "../GlobalContainer/Container";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

const TopBar = () => {
  return (
    <>
      <Container>
        <div className="block md:hidden mb-[10px]">
          <img
            src="assets/img/Logo.svg"
            className="mx-auto xs:w-[80px] xs:h-[60px] md:max-w-[80px] lg:min-w-[180px] lg:h-[80px] "
            alt="image"
          />
        </div>
        <div className="text-[#FFFFFF] relative h-[40px] mb-[40px] lg:mb-[50px] top-[-20px] md:top-[40px] items-center justify-center p-2 md:p-0">
          <div className="lg:border-b lg:border-b-[rgba(152,154,169,0.6)] absolute z-50 md:w-full w-[105%] md:p-4 lg:p-0 flex items-center lg:justify-center md:justify-around xs:gap-x-[20px]  lg:gap-x-[105px] ">
            <div className="flex items-center justify-center  xs:space-x-[4px] md:space-x-[20px]">
              <FaFacebookF className="lg:w-[15px] lg:h-[20px] md:w-[12px] md:h-[18px] sm:w-[10px] sm:h-[16px] " />
              <IoLogoTwitter className="lg:w-[20px] lg:h-[25px] md:w-[18px] md:h-[20px] sm:w-[10px] sm:h-[16px]" />
              <FaInstagram className="lg:w-[20px] lg:h-[25px] md:w-[18px] md:h-[20px] sm:w-[10px] sm:h-[16px]" />
              <FaYoutube className="lg:w-[25px] lg:h-[30px] md:w-[20px] md:h-[25px] sm:w-[10px] sm:h-[16px]" />

              <IoLogoLinkedin className="lg:w-[25px] lg:h-[30px] md:w-[20px] md:h-[25px] sm:w-[10px] sm:h-[16px]" />
            </div>
            <div className="hidden md:block">
              <img
                src="assets/img/Logo.svg"
                className="xs:w-[68px] xs:h-[60px] md:max-w-[80px] lg:min-w-[180px] lg:h-[80px] "
                alt="image"
              />
            </div>

            <div className="flex space-x-[30px] lg:space-x-[60px] items-center justify-center ">
              <div className="flex items-center gap-x-[10px] text-[12px] md:text-[14px] lg:text-[17px]">
                <BsFillTelephoneFill className="" />
                (+021) 345 678 910
              </div>

              <div className="flex items-center gap-x-[10px] text-[12px] md:text-[14px] lg:text-[18px]">
                <IoMail className=" lg:w-[30px] lg:h-[20px]" />
                info@filmina.com
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TopBar;
