import Container from "@/GlobalComponents/GlobalContainer/Container";
import React from "react";
import { LatestworkData } from "./LatestworkData";

const LatestWork = () => {
  return (
    <>
      <Container>
        <div className="text-center lg:text-left">
          <span className="font-bold font-roboto text-[14px] text-[#FF5E3A] uppercase">
            ------works
          </span>
          <h4 className="font-bold text-[72px] text-[#FFFFFF] font-roboto leading-[72px] lg:leading-normal">
            Check Out Our Latest Works
          </h4>
          <p className="text-[#82869A] font-normal font-inter text-[16px]">
            Proin et magna blandit arcu pellentesque scelerisque sit amet a
            sapien aenean
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:gap-x-[50px] gap-y-[50px] gap-5 mt-[50px] mb-[100px]">
          {LatestworkData.map((item, id) => (
            <div className="relative items-center justify-center" key={id}>
              <div className="p-[10px] lg:p-[20px] overflow-hidden object-center opacity-40 hover:opacity-10 lg:hover:scale-105 transition-all duration-900 cursor-all cursor-pointer shadow-md shadow-cyan-700 bg-cyan-950">
                <img
                  className="w-[550px] h-[300px] "
                  src={item.src}
                  alt="yes"
                />
              </div>
              <div className="absolute bottom-[20px] left-[20px] lg:left-[30px] ">
                <h4 className="font-bold text-[36px] text-[#FFFFFF] font-roboto ">
                  {item.title}
                </h4>
                <p className="text-[#ffffff] font-normal mb-[30px] font-inter text-[16px] gap-x-20">
                  {item.description}
                  <span className="text-[#FF5E3A] ml-6">{item.para}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default LatestWork;
