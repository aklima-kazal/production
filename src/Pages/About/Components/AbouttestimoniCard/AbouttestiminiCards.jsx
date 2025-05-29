import React from "react";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import { FaStar } from "react-icons/fa";
import { AboutcardsData } from "./AboutcardsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const AbouttestiminiCards = () => {
  const getReviews = (reviewsNumber) => {
    let reviews = [];
    for (let i = 0; i < reviewsNumber; i++) {
      reviews.push(<FaStar color="#FF5E3A" />);
    }
    return reviews;
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Container>
        <div className=" w-[80vw] sm:w-[80%]  md:w-[83%] mx-[20px] lg:mx-0 z-50 mt-[-200px] sm:mt-[-330px] md:mt-[-380px] mb-[100px] ">
          <Slider {...settings}>
            {AboutcardsData?.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="border border-[#FF5E3A] bg-[#F9F9F9] p-[30px]  rounded-[5px]  md:h-[350px] shadow-[0px_8px_25px_8px] "
                  >
                    <div className="flex justify-between ">
                      <div className="flex gap-x-1">
                        {getReviews(item.review)}
                      </div>

                      <img src={item.src} alt="img" />
                    </div>
                    <div className="">
                      <div className="">
                        <h4 className="mt-5 mb-5 font-bold font-Roboto Condensed text-[20px] md:text-4xl text-[#11121E] w-[120%] md:w-[96%]">
                          {item.title}
                        </h4>
                        <p className="text-[#82869A] font-normal w-[110%] md:w-[90%] font-inter text:[14px] md:text-[16px] mr-[30px] mb-5">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex gap-x-3.5  ">
                        <img
                          src={item.src2}
                          className="w-[50px] h-[50px] rounded-4xl overflow-hidden object-cover"
                          alt="img"
                        />
                        <div className="flex items-center gap-x-2">
                          <h4 className="font-bold font-Roboto Condensed text-[14px] text-[#11121E]">
                            {item.username}
                          </h4>
                          <p className="text-[#FF5E3A] font-Roboto Condensed font-bold text-[14px]">
                            {item.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default AbouttestiminiCards;
