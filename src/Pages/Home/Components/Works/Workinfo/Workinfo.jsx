import Container from "@/GlobalComponents/GlobalContainer/Container";
import React from "react";

export const Workinfo = ({ src, title, description, para }) => {
  return (
    <>
      <Container>
        <div className="relative items-center justify-center ">
          <div className="p-[20px] overflow-hidden object-center opacity-40 hover:opacity-10 lg:hover:scale-105 transition-all duration-900 cursor-all cursor-pointer shadow-md shadow-cyan-700 bg-cyan-950">
            <img className="w-[550px] h-[300px] " src={src} alt="yes" />
          </div>
          <div className="absolute bottom-[20px]  left-[30px] ">
            <h4 className="font-bold text-[27px] md:text-[36px] text-[#FFFFFF] font-roboto ">
              {title}
            </h4>
            <p className="text-[#ffffff] md:w-[100%] w-[95%] font-normal mb-[30px] font-inter text-[12px] md:text-[16px] gap-x-20">
              {description}
              <span className="text-[#FF5E3A] ml-6">{para}</span>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};
