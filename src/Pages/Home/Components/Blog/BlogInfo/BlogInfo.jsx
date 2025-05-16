import { Button } from "@/components/ui/button";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import React from "react";

const BlogInfo = ({ title, heading, description, button, src }) => {
  return (
    <>
      <div className="text-center lg:text-left">
        <div>
          <span className="text-[#FF5E3A] font-bold font-roboto text-[14px] ">
            {title}
          </span>
          <h4 className="font-bold text-[72px] mb-[30px] lg:w-[60%] text-[#FFFFFF] font-roboto leading-[72px]">
            {heading}
          </h4>
          <p className="text-[#82869A] mb-[30px] font-normal font-inter text-[16px] w-[96%] lg:w-[77%]">
            {description}
          </p>
        </div>
        <div className="mb-[50px] lg:mb-0">
          <Button className="cursor-pointer p-[20px_35px] text-[14px] bg-transparent border border-[#FF5E3A] hover:bg-[#FF5E3A] transition-all duration-400 font-bold font-roboto text-[#FFFFFF]">
            {button}
          </Button>
        </div>
      </div>
    </>
  );
};

export default BlogInfo;
