import React from "react";
import { Button } from "@/components/ui/button";
import { IoMdPlayCircle } from "react-icons/io";
import { motion } from "framer-motion";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import { useMediaQuery } from "react-responsive";

const Banner = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 992px)",
  });
  return (
    <div className=" mt-[-180px] p-[8px] sm:p-12 lg:p-40  bg-radial-[at_10%_25%] from-rose-950 to-slate-900 to-75%">
      <Container>
        <div className="mt-[280px] lg:mt-[170px]">
          {isDesktopOrLaptop ? (
            <motion.div animate={{ x: [70, 20, 10] }}>
              <p className="text-[#FF5E3A]  font-bold font-roboto text-[14px]">
                One scene at a time - the movie maker director.
              </p>
              <h2 className="font-bold text-[35px] md:text-6xl lg:text-8xl font-roboto mt-2.5 mb-8 text-[#FFFFFF] xs:w-[90%] sm:w-[60%] md:w-[71%] lg:w-[118%] xl:w-[90%] xxl:w-[70%] xs:leading-[50px] md:leading-[50%] lg:leading-[105px]">
                Behind Every Great Film is a Visionary.
              </h2>
              <h4 className="font-normal font-inter text-[16px] md:text-xl text-[#ffffff] w-[90%] md:w-[100%] lg:w-[68%] ">
                Crafting unforgettable stories bringing their creative vision to
                life on the big screen - the movie maker director
              </h4>
            </motion.div>
          ) : (
            <div>
              <p className="text-[#FF5E3A]  font-bold font-roboto text-[14px]">
                One scene at a time - the movie maker director.
              </p>
              <h2 className="font-bold text-[35px] md:text-6xl lg:text-8xl font-roboto mt-2.5 mb-8 text-[#FFFFFF] xs:w-[90%] sm:w-[60%] md:w-[71%] lg:w-[118%] xl:w-[90%] xxl:w-[70%] xs:leading-[50px] md:leading-[50%] lg:leading-[105px]">
                Behind Every Great Film is a Visionary.
              </h2>
              <h4 className="font-normal font-inter text-[16px] md:text-xl text-[#ffffff] w-[90%] md:w-[100%] lg:w-[68%] ">
                Crafting unforgettable stories bringing their creative vision to
                life on the big screen - the movie maker director
              </h4>
            </div>
          )}

          <div className="flex mt-6 gap-x-2 ml-[10px] md:ml-0">
            <div>
              <Button className="cursor-pointer p-[20px_25px] hover:scale-105 text-[14px] bg-[#FF5E3A] hover:bg-[#FF5E3A] transition-all duration-400 font-bold font-roboto text-[#FFFFFF]">
                Get started
              </Button>
            </div>
            <div className=" ">
              <Button className="cursor-pointer hover:ml-1 p-[20px_35px] text-[14px] bg-transparent border border-[#FF5E3A] hover:bg-[#FF5E3A] transition-all duration-400 font-bold font-roboto text-[#FFFFFF] ">
                view our works
                <IoMdPlayCircle />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
