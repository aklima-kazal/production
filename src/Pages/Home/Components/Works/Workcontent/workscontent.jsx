import { Button } from "@/components/ui/button";
import React from "react";

const Workscontent = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[#FF5E3A] font-bold font-roboto text-[14px]">
            ---- works
          </p>
          <h4 className="font-bold text-5xl md:text-[72px] text-[#FFFFFF] font-roboto mt-2.5 mb-5 md:leading-[72px]">
            Check Out Our Latest Works
          </h4>
          <p className="text-[#82869A] font-normal font-inter text-[16px]">
            Proin et magna blandit arcu pellentesque scelerisque sit amet a
            sapien aenean
          </p>
        </div>
        <div>
          <Button className="cursor-pointer p-[20px_35px] text-[14px] bg-transparent border border-[#FF5E3A] hover:bg-[#FF5E3A] transition-all duration-400 font-bold font-roboto text-[#FFFFFF]">
            View all works
          </Button>
        </div>
      </div>
    </>
  );
};

export default Workscontent;
