import React from "react";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import AbouttestiminiCards from "../AbouttestimoniCard/AbouttestiminiCards";

const Abouttestimonial = () => {
  return (
    <>
      <Container>
        <div className="grid lg:grid-cols-[60%_40%] gap-x-6 mb-[30px] justify-around ">
          <div className="lg:text-left text-center">
            <span className="text-[#FF5E3A] font-bold font-roboto text-[14px]">
              ------TESTIMONIAL
            </span>
            <h4 className="text-[#FFFFFF] font-bold text-[72px] font-roboto mt-2.5 mb-5 leading-[72px]">
              What People Says?
            </h4>
            <span className="text-[#82869A] font-bold font-roboto text-[24px]">
              What they say about us?
            </span>
            <p className="text-[#82869A] font-normal mb-[30px] font-inter text-[16px]">
              Proin et magna blandit arcu pellentesque scelerisque sit amet a
              sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis
              dui. Integer consequat consectetur est id
            </p>
          </div>
          <div className="">
            <img
              src="assets/img/film7.jpg"
              className="w-[80%] lg:w-[100%] lg:h-[588px] object-cover overflow-hidden rounded-[5px] shadow-[0px_8px_25px_8px] opacity-70 mx-auto"
              alt="img"
            />
          </div>
        </div>
        <AbouttestiminiCards />
      </Container>
    </>
  );
};

export default Abouttestimonial;
