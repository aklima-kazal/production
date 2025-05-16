import React from "react";
import Container from "../GlobalContainer/Container";
import { Button } from "@/components/ui/button";
import FooterList from "./FooterList/FooterList";

const Footer = () => {
  return (
    <>
      <Container>
        <div className="text-center lg:text-left flex-none lg:flex items-center justify-between mb-8 lg:border-b w-full lg:border-b-[rgba(152,154,169,0.6)]">
          <h4 className="text-[#FFFFFF] font-bold font-roboto text-[36px] mb-[30px] lg:mb-[54px]">
            Subscribe
          </h4>
          <p className="text-[#82869A] font-normal font-inter text-[16px] md:w-[70%] lg:w-[43%] mb-[30px] lg:mb-[54px] mx-auto">
            Proin magna blandit arcu pellent esque sceleri sque sit amet sapien
            purus nunc cursus antein vehicula facilisis Integer conse
          </p>

          <div className=" lg:flex lg:space-x-[20px] items-center justify-center mb-[54px]">
            <div className="mb-[30px] lg:mb-0">
              <input
                type="email"
                placeholder="Enter your email"
                className=" outline-none bg-[#FFFFFF] p-3 rounded-[5px] w-[80%] "
              />
            </div>
            <div className="p-[10px_25px] items-center justify-center">
              <Button className="cursor-pointer p-[20px_35px] text-[14px] bg-transparent border border-[#FF5E3A] hover:bg-[#FF5E3A] transition-all duration-400 font-bold font-roboto text-[#FFFFFF]">
                Get started
              </Button>
            </div>
          </div>
        </div>
        <FooterList />
      </Container>
    </>
  );
};

export default Footer;
