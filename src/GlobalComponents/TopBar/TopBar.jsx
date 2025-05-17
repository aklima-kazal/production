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
        <div className="text-[#FFFFFF] relative h-[40px] mb-[40px] lg:mb-[50px] top-5 items-center justify-center ">
          <div className="lg:border-b lg:border-b-[rgba(152,154,169,0.6)] absolute z-50 sm:w-[30%]  md:w-full xs:p-2 md:p-4 lg:p-0  flex items-center lg:justify-center md:justify-around  xs:gap-x-[30px]  lg:gap-x-[105px] ">
            <div className="flex items-center justify-center  xs:space-x-[6px] md:space-x-[30px]">
              <FaFacebookF />
              <IoLogoTwitter />
              <FaInstagram />
              <FaYoutube />

              <IoLogoLinkedin />
            </div>
            <div className="">
              <img
                src="assets/img/Logo.svg"
                className="xs:w-[68px] xs:h-[60px] md:max-w-[80px] lg:min-w-[180px] lg:h-[80px] "
                alt="image"
              />
            </div>

            <div className="flex space-x-[60px] xs:space-x-[9px] md:space-x-[30px] lg:space-x-[60px] items-center justify-center ">
              <div className="flex items-center gap-x-[10px]">
                <BsFillTelephoneFill className="" />
                (+021) 345 678 910
              </div>

              <div className="flex items-center gap-x-[10px]">
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
