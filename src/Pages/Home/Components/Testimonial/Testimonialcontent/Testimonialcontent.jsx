import React from "react";

const Testimonialcontent = ({ heading, title, content, description }) => {
  return (
    <>
      <div className="lg:text-left text-center">
        <span className="text-[#FF5E3A] font-bold font-roboto text-[14px]">
          {heading}
        </span>
        <h4 className="font-bold text-[72px] text-[#FFFFFF] font-roboto mt-2.5 mb-5 lg:w-[110%] leading-[72px]">
          {title}
        </h4>
        <p className="text-[#82869A] font-bold  font-roboto text-[24px]">
          {content}
        </p>
        <h4 className="text-[#82869A] font-normal font-inter text-[16px] lg:w-[105%] ">
          {description}
        </h4>
      </div>
    </>
  );
};

export default Testimonialcontent;
