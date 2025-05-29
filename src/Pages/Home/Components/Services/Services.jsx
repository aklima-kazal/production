import Container from "@/GlobalComponents/GlobalContainer/Container";
import React from "react";
import Servicesinfo from "./Servicesinfo/Servicesinfo";
import ServicesData from "./ServicesData";
import Servicescontent from "./Servicescontent/Servicescontent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Services = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    dots: false,
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
          initialSlide: 1,
          arrows: false,
          rows: 2,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          arrows: false,
          rows: 1,
          dots: true,
        },
      },
      {
        breakpoint: 320,
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
      <div className="mt-[100px]">
        <div>
          <Servicescontent />
        </div>
        <Container>
          <div className="w-[96%] lg:w-full mx-auto">
            <Slider {...settings} className="">
              {ServicesData.map((item, index) => (
                <Servicesinfo
                  logoimg={item.logoimg}
                  src={item.src}
                  title={item.title}
                  description={item.description}
                  para={item.para}
                  key={index}
                />
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Services;
