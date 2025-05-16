import React from "react";
import ServiceVector from "@/assets/images/servicevector.svg";

const Servicescontent = () => {
  return (
    <>
      <div className="relative">
        <div className="text-center mb-[50px] ">
          <p className="text-[#FF5E3A] font-bold font-roboto text-[14px]">
            ----- services
          </p>
          <h4 className="font-bold text-[72px] text-[#FFFFFF] font-roboto">
            Our Services
          </h4>
          <span className="text-[#82869A] font-normal font-inter text-[16px]">
            Proin et magna blandit arcu pellentesque scelerisque sit amet a
            sapien aenean
          </span>
        </div>
        <div className="absolute bottom-[0px] top-[-300px] right-0 z-[-1]"></div>
      </div>
    </>
  );
};

export default Servicescontent;
