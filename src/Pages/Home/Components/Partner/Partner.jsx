import Container from "@/GlobalComponents/GlobalContainer/Container";
import React from "react";
import partnersimg from "./partnersimg";

const Partner = () => {
  return (
    <>
      <div className="p-6 ">
        <Container>
          <div className="items-center justify-center text-center mt-[10px] md:mt-[94px] mb-[40px] lg:mb-[56px]">
            <p className="text-[#FF5E3A] font-bold font-roboto text-[14px]">
              ---- partners
            </p>
            <h5 className="font-bold text-[45px] text-[#FFFFFF] font-roboto mt-2.5 mb-8">
              Trusted by the Best Brands
            </h5>
          </div>
          <div className="space-x-[30px] lg:space-x-[100px] flex items-center justify-center mb-[50px] ">
            {partnersimg.map((item, i) => (
              <div
                className="hover:scale-90 transition-all duration-500 cursor-pointer"
                key={i}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="lg:w-[80px] lg:h-[100px] min-w-[30px] min-h-[60px] "
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Partner;
