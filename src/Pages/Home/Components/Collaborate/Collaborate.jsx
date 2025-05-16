import React from "react";
import { Button } from "@/components/ui/button";
import Container from "@/GlobalComponents/GlobalContainer/Container";

const Collaborate = () => {
  return (
    <Container>
      <div className="bg-radial-[at_10%_25%] from-slate-900 to-slate-500 to-75% pt-[40px] lg:pt-[80px] pl-[50px] pb-[40px] lg:pb-[82px] rounded-[5px] mb-[100px] shadow-[0px_8px_25px_8px] shadow-[#201b2c] w-[90%] lg:w-[100%] mx-auto">
        <span className="text-[#ffffffff] font-bold font-roboto text-[14px]">
          ------COLLABORATING
        </span>
        <h4 className="font-bold text-5xl lg:text-[72px] w-[100%] lg:w-[60%] mb-[30px] text-[#FFFFFF] font-roboto mt-2.5 lg:leading-[72px]">
          We Love Collaborating With Other Creatives
        </h4>
        <div className="">
          <Button className="cursor-pointer  p-[25px_35px] text-[14px] bg-transparent border border-[#FF5E3A] hover:bg-[#FF5E3A] transition-all duration-400 font-bold font-roboto text-[#FFFFFF]">
            let’s collaborations
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Collaborate;
