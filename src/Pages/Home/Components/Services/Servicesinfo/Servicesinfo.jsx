import React from "react";
import Container from "@/GlobalComponents/GlobalContainer/Container";

const Servicesinfo = ({ src, title, description, para, logoimg }) => {
  return (
    <>
      <Container>
        <div className="relative items-center justify-center mb-[50px] mx-[8px] lg:mx-[2%]">
          <div className="p-[10px] lg:p-[15px]  overflow-hidden object-center opacity-60 hover:opacity-30  cursor-all cursor-pointer shadow-md shadow-cyan-700 bg-cyan-950">
            <img className="w-[500px] h-[350px] " src={src} alt="yes" />
          </div>
          <div className="absolute bottom-[20px] left-[20px] lg:left-[35px] ">
            <div className=" items-center justify-center ">
              <img
                src={logoimg}
                alt="img"
                className="items-center justify-center bg-[#FFFFFF] p-[8px] rounded-full"
              />
            </div>
            <h4 className="font-bold text-3xl lg:text-[36px] text-[#FFFFFF] font-roboto ">
              {title}
            </h4>
            <p className="text-[#ffffff] font-normal mb-[30px] font-inter text-[16px] gap-x-20">
              {description}
              <span className="text-[#FF5E3A] ml-6">{para}</span>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Servicesinfo;
