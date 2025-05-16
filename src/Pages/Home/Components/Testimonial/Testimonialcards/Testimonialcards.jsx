import React from "react";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import { FaStar } from "react-icons/fa";

const Testimonialcards = ({
  review,
  icon,
  title,
  description,
  src,
  src2,
  designation,
  username,
}) => {
  const getReviews = (reviewsNumber) => {
    let reviews = [];
    for (let i = 0; i < reviewsNumber; i++) {
      reviews.push(<FaStar color="#FF5E3A" />);
    }
    return reviews;
  };
  return (
    <>
      <Container>
        <div className="">
          <div className="flex justify-between ">
            <div className="flex gap-x-1">{getReviews(review)}</div>

            <img src={src} alt="img" />
          </div>
          <div>
            <div className="">
              <h4 className="mt-5 mb-5 font-bold font-Roboto Condensed text-2xl md:text-4xl text-[#11121E] w-[115%]">
                {title}
              </h4>
              <p className="text-[#82869A] font-normal font-inter text-[16px] mr-[30px] mb-5">
                {description}
              </p>
            </div>

            <div className="flex gap-x-3.5">
              <img
                src={src2}
                className="w-[50px] h-[50px] rounded-4xl overflow-hidden object-cover"
                alt="img"
              />
              <div className="flex items-center gap-x-2">
                <h4 className="font-bold font-Roboto Condensed text-[14px] text-[#11121E]">
                  {username}
                </h4>
                <p className="text-[#FF5E3A] font-Roboto Condensed font-bold text-[14px]">
                  {designation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Testimonialcards;
