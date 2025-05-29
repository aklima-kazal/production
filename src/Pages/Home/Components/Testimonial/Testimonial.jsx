import React from "react";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import Testimonialcontent from "./Testimonialcontent/Testimonialcontent";
import { TestimonialData } from "./TestimonialData";
import Testimonialcards from "./Testimonialcards/Testimonialcards";
import { Testimonicardsdata } from "./Testimonialcards/Testimonicardsdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      {
        breakpoint: 320,
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
        <div className="relative grid lg:grid-cols-[55%_40%] gap-x-[70px] p-2 mb-[100px] mt-[50px]">
          {TestimonialData.map((item, index) => (
            <Testimonialcontent
              heading={item.heading}
              title={item.title}
              content={item.content}
              description={item.description}
              key={index}
            />
          ))}
          <div className=" lg:top-[216px] w-[90vw] sm:w-[80%] md:w-[90%] lg:w-[900px]  left-0 bottom-0 absolute  lg:mt-[40px] mx-[20px] z-50">
            <Slider {...settings}>
              {Testimonicardsdata?.map((item, index) => (
                <div className=" bg-white justify-between border border-[#f82626] shadow-[0px_8px_25px_8px] p-[30px] rounded-[5px] ">
                  <Testimonialcards
                    src={item.src}
                    review={item.review}
                    title={item.title}
                    description={item.description}
                    src2={item.src2}
                    designation={item.designation}
                    username={item.username}
                    key={index}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="mt-8 lg:mt-3 mx-[45px]">
            <img
              src="assets/img/film7.jpg"
              className="w-[100%] h-[200vw] sm:h-[100%] sm:w-[100%] lg:h-[588px] object-cover overflow-hidden rounded-[5px] shadow-[0px_8px_25px_8px] opacity-70"
              alt="img"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Testimonial;
