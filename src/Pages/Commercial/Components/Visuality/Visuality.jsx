import React from "react";
import Container from "@/GlobalComponents/GlobalContainer/Container";

const Visuality = () => {
  return (
    <>
      <Container>
        <div className="grid lg:grid-cols-2 gap-x-[50px] ">
          <div className=" mx-auto lg:mx-0 ">
            <img
              src="assets/img/dance2.jpg"
              alt="img"
              className="lg:w-[500px] w-[460px] h-[500px] overflow-hidden object-cover rounded-[5px] shadow-[0px_8px_20px_8px] "
            />
          </div>
          <div className="mt-[30px] lg:mt-0 text-center lg:text-left ">
            <span className="text-[#FF5E3A] font-bold font-roboto text-[14px] uppercase">
              ------Visually
            </span>
            <h4 className="font-bold text-[72px] text-[#FFFFFF] font-roboto mb-[30px] leading-[72px]">
              Make it Visually Appealing
            </h4>
            <span className="text-[#82869A] font-bold font-roboto text-[24px] mb-[30px] mt-[30px]">
              Your commercial should be visually appealing and engaging. Use
              high-quality images or video to showcase
            </span>
            <p className="text-[#82869A] font-normal mt-[30px]  font-inter text-[16px] ">
              Proin et magna blandit arcu pellentesque scelerisque sit amet a
              sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis
              dui. Integer consequat consectetur est id blandit. Proin et magna
              blandit arcu pellentesque scelerisque sit amet.
              <h4 className="mt-[30px]">
                Proin et magna blandit arcu pellentesque scelerisque sit amet a
                sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis
                dui.
              </h4>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Visuality;
