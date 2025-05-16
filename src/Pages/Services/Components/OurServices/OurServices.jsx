import React from "react";
import { OurservicesData } from "./OurservicesData";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import Slider from "react-slick";

const OurServices = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",

    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
          rows: 2,
          dots: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          rows: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <Container className="mt-[100px] ">
        <div className="mb-[100px]">
          <div className="text-center">
            <span className="text-[#FF5E3A] font-bold font-roboto text-[14px]">
              ------SERVICES
            </span>
            <h4 className="font-bold text-[45px] text-[#FFFFFF] font-roboto">
              Our Services
            </h4>
            <p className="text-[#82869A] font-normal font-inter text-[16px] mb-4">
              Proin et magna blandit arcu pellentesque scelerisque sit amet a
              sapien aenean
            </p>
          </div>
          <Slider {...settings}>
            {OurservicesData?.map((item, index) => (
              <div key={index} className=" relative  mb-[40px]">
                <div className="p-[10px] lg:p-[20px] ml-[20px] overflow-hidden object-center opacity-60 hover:opacity-30  cursor-all cursor-pointer shadow-md shadow-cyan-700 bg-cyan-950">
                  <img
                    src={item.src}
                    className="w-[480px] h-[360px] lg:w-[360px] lg:h-[350px] "
                    alt="img"
                  />
                </div>

                <div className="absolute bottom-[20px] p-[20px] left-[35px] ">
                  <div className=" items-center justify-center ">
                    <img
                      src={item.logoimg}
                      alt="img"
                      className="items-center justify-center bg-[#FFFFFF] p-[8px] rounded-full"
                    />
                  </div>
                  <h4 className="font-bold text-[36px] text-[#FFFFFF] font-roboto ">
                    {item.title}
                  </h4>
                  <p className="text-[#ffffff] font-normal w-[90%] mb-[30px] font-inter text-[16px] gap-x-20">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default OurServices;
