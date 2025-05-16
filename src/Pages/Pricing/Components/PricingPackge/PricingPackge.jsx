import Container from "@/GlobalComponents/GlobalContainer/Container";
import React from "react";
import { Package } from "./packageData";
import { Button } from "@/components/ui/button";

const PricingPackge = () => {
  return (
    <>
      <Container>
        <div className="mb-[100px] mt-[100px]">
          <div className="text-center lg:text-left">
            <span className="text-[#FF5E3A] font-bold font-roboto text-[14px] uppercase">
              --------- pricing
            </span>
            <h4 className="font-bold text-[72px] text-[#FFFFFF] font-roboto">
              Choose Your Plans
            </h4>
            <p className="text-[#82869A] font-normal font-inter text-[16px]">
              Proin et magna blandit arcu pellentesque scelerisque sit amet a
              sapien aenean
            </p>
          </div>
          <div className=" mt-[50px] mb-[100px]  ">
            <div className="  grid lg:grid-cols-3 gap-x-[50px] items-center justify-center">
              {Package?.map((item, i) => (
                <div
                  key={i}
                  className="hover:bg-[#FF5E3A] rounded-[5px] bg-[rgba(0,0,0,0.94)] gap-y-[80px] p-[30px] items-center justify-center w-[380px] h-[105vh] mb-[30px] lg:mb-0"
                >
                  <div className="">
                    <h4 className="font-bold text-[36px] text-[#FFFFFF] font-roboto uppercase mb-[10px]  ">
                      {item.title}
                    </h4>
                    <p className="text-[#FFFFFF] font-normal font-inter text-[16px] mb-[30px]">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <h4 className="font-bold text-[45px] text-[#FFFFFF] font-roboto">
                      {item.price}
                    </h4>
                    <span className=" text-[#FFFFFF] font-bold font-RobotoCondensed text-[11px] items-center uppercase  justify-center">
                      {item.perproject}
                    </span>
                  </div>
                  <div className="flex items-center justify-center mt-[30px] mb-[30px]">
                    <Button className="uppercase cursor-pointer text-[14px] w-full bg-[#82869A] hover:bg-white hover:text-black rounded-[5px] pt-5 pb-5">
                      {item.button}
                    </Button>
                  </div>
                  <div className="">
                    <ul className="">
                      <li className="font-bold font-roboto text-[20px] mb-[20px] text-[#FFFFFF] uppercase ">
                        {item.include}
                      </li>
                      <li className="text-[#82869A] font-normal font-inter text-[16px] flex hover:text-[#FFFFFFFF]  justify-between items-center gap-x-[10px]  border-b  border-dashed pb-2  border-[#82869A]">
                        {item.items1}
                        <p className="text-[#FFFFFF] font-bold text-[14px] font-roboto">
                          {"Limited"}
                        </p>
                      </li>

                      <li
                        key={i}
                        className="text-[#82869A] justify-between font-normal font-inter text-[16px] flex items-center gap-x-[10px] border-b hover:text-[#FFFFFFFF] cursor-pointer border-dashed pb-2 pt-4 border-[#82869A]"
                      >
                        {item.items2}
                        <p className="text-[#FFFFFF] font-bold text-[14px] font-roboto">
                          {"Limited"}
                        </p>
                      </li>
                      <li
                        key={i}
                        className="text-[#82869A] justify-between font-normal font-inter text-[16px] hover:text-[#FFFFFFFF] cursor-pointer flex items-center gap-x-[10px] border-b  border-dashed pb-2 pt-4 border-[#82869A]"
                      >
                        {item.items3}
                        <p className="text-[#FFFFFF] font-bold text-[14px] font-roboto">
                          {"Limited"}
                        </p>
                      </li>

                      <li
                        key={i}
                        className="text-[#82869A] font-normal font-inter text-[16px]  border-b  hover:text-[#FFFFFFFF] cursor-pointerborder-dashed pb-2 pt-4 border-[#82869A] items-center gap-x-[10px] flex justify-between"
                      >
                        {item.items4}
                        <p className="text-[#FFFFFF] font-bold text-[14px] font-roboto">
                          {"1-3"}
                        </p>
                      </li>
                      <li
                        key={i}
                        className="text-[#82869A] font-normal font-inter text-[16px]  border-b  hover:text-[#FFFFFFFF] cursor-pointerborder-dashed pb-2 pt-4 border-[#82869A] items-center gap-x-[10px] flex justify-between"
                      >
                        {item.items5}
                        <p className="text-[#FFFFFF] font-bold text-[14px] font-roboto">
                          {"Basic"}
                        </p>
                      </li>
                      <li
                        key={i}
                        className="text-[#82869A] font-normal font-inter text-[16px]  border-b  hover:text-[#FFFFFFFF] cursor-pointer border-dashed pb-2 pt-4 border-[#82869A] items-center gap-x-[10px] flex justify-between"
                      >
                        {item.items6}
                        <p className="text-[#FFFFFF] font-bold text-[14px] font-roboto">
                          {"2-4 weeks"}
                        </p>
                      </li>
                      <li
                        key={i}
                        className="text-[#82869A] font-normal font-inter text-[16px] hover:text-[#FFFFFFFF] cursor-pointer  border-dashed pt-4  items-center gap-x-[10px] flex justify-between"
                      >
                        {item.items7}
                        <p className="text-[#FFFFFF] font-bold text-[14px] font-roboto">
                          {"1"}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PricingPackge;
