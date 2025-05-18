import React from "react";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import { BlogData, BlogimgData } from "./BlogInfo/BlogData";
import BlogInfo from "./BlogInfo/BlogInfo";

const Blog = () => {
  return (
    <>
      <Container>
        <div className="flex-reverse lg:flex mb-[94px] lg:p-[30px]">
          {BlogData.map((item, index) => (
            <BlogInfo
              title={item.title}
              heading={item.heading}
              description={item.description}
              button={item.button}
              key={index}
            />
          ))}
          <div className="grid lg:grid-cols-3 lg:gap-x-[30px]">
            {BlogimgData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="items-center justify-center lg:items-normal lg:justify-normal"
                >
                  <div className=" lg:hover:scale-95 cursor-pointer transition-all duration-500 mt-[50px] lg:mt-0">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="mx-auto h-[300px] w-[80vw]  lg:w-[360px] shadow-[0px_8px_20px_8px] object-cover overflow-hidden mb-8 lg:mb-5 rounded-[5px]"
                    />
                  </div>
                  <div className="shadow-[0px_8px_20px_8px] rounded-[5px] p-[30px] lg:p-[20px] w-[60vw]  mx-auto lg:w-full text-center lg:text-left">
                    <h2 className="font-bold text-[24px] text-[#FFFFFF] font-roboto leading-[30px] w-[90%] lg:w-[101%] mx-auto">
                      {item.heading}
                    </h2>
                    <p className="text-[#82869A] mt-[10px]  font-normal font-inter text-[16px] w-[90%] lg:w-[101%] mx-auto">
                      {item.para}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
