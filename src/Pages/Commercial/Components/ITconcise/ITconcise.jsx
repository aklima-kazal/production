import React from "react";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import Visuality from "../Visuality/Visuality";

const ITconcise = () => {
  return (
    <>
      <Container>
        <div className="grid lg:grid-cols-2 gap-x-[50px]  mb-[100px]">
          <div className="mt-[30px] lg:mt-0 text-center lg:text-left ">
            <span className="text-[#FF5E3A] font-bold font-roboto text-[14px] uppercase">
              ------Keep it concise
            </span>
            <h4 className="font-bold text-6xl md:text-[72px] text-[#FFFFFF] font-roboto mb-[30px] leading-[72px]">
              TV Commercials are Typically Short, so it's Important
            </h4>
            <span className="text-[#82869A] font-bold font-roboto text-[24px] mb-[30px] mt-[30px]">
              Focus on the most importan t details about your portfolio and
              convey them in a clear and straightforward manner.
            </span>
            <p className="text-[#82869A] font-normal mt-[30px] font-inter text-[16px]">
              Proin et magna blandit arcu pellentesque scelerisque sit amet a
              sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis
              dui. Integer consequat consectetur est id blandit. Proin et magna
              blandit arcu pellentesque scelerisque sit amet.{" "}
            </p>
          </div>
          <div className="order-first lg:order-last">
            <img
              src="assets/img/dance.jpg"
              alt="img"
              className="w-[500px] h-[500px] overflow-hidden object-cover rounded-[5px] shadow-[0px_8px_20px_8px] mx-auto lg:mx-0"
            />
          </div>
        </div>
        <Visuality />
      </Container>
    </>
  );
};

export default ITconcise;
