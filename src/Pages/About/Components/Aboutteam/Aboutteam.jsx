import React from "react";
import { AboutteamData } from "./AboutteamData";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import { useEffect } from "react";
import { motion, useAnimate, useAnimation } from "motion/react";
import { useMediaQuery } from "react-responsive";

const Aboutteam = () => {
  const animationControl = useAnimation();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 992px)",
  });
  const Animation = {
    hidden: {
      x: 10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 2,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      animationControl.start({
        scale: 1 - scrollY / 42000,
        opacity: 1 + scrollY / 400,
        transition: { duration: 0.5, ease: "easeIn" },
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Container>
        {isDesktopOrLaptop ? (
          <div className="grid lg:grid-cols-[60%_40%] ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={Animation}
              viewport={{ once: true }}
              transition={{
                staggerChildren: 0.3,
                duration: 0.5,
                ease: "easeIn",
              }}
              animate={animationControl}
              className="mt-[80px] "
            >
              {AboutteamData.map((item, i) => (
                <div
                  key={i}
                  className="text-center lg:text-left justify-center lg:items-left w-[80%] mx-auto lg:mx-0"
                >
                  <p className="text-[#FF5E3A] font-bold font-roboto text-[14px] text-center lg:text-left">
                    {item.title}
                  </p>

                  <h4 className="font-bold text-5xl lg:text-7xl text-[#FFFFFF] font-roboto mt-2.5 mb-8 w-[102%] lg:w-[80%] text-center items-center justify-center lg:items-left lg:text-left">
                    {item.heading}
                  </h4>
                  <h4 className="text-[#82869A] font-bold font-roboto text-[18px] lg:text-2xl w-[80%]">
                    {item.content}
                  </h4>
                  <p className="text-[#82869A] font-normal font-inter text-[16px] mt-6 w-[80%]">
                    {item.description1}
                  </p>

                  <p className="text-[#82869A] font-normal font-inter text-[16px] mt-6 w-[80%]">
                    {item.description3}
                  </p>
                </div>
              ))}
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={Animation}
              viewport={{ once: true }}
              transition={{
                staggerChildren: 0.3,
                duration: 0.5,
                ease: "easeIn",
              }}
              className=""
            >
              <motion.div
                animate={animationControl}
                className="shadow-md shadow-violet-500  "
              >
                <img
                  className=" mt-[30px] lg:mt-[-60px] rounded-md overflow-hidden object-cover "
                  src="assets/img/vision2.jpg"
                  alt="img"
                />
              </motion.div>
            </motion.div>
          </div>
        ) : (
          <div>
            <div className="mt-[80px] ">
              {AboutteamData.map((item, i) => (
                <div
                  className="text-center lg:text-left items-center justify-center lg:items-left w-[80%] mx-auto lg:mx-0"
                  key={i}
                >
                  <p className="text-[#FF5E3A] font-bold font-roboto text-[14px] text-center lg:text-left">
                    {item.title}
                  </p>

                  <h4 className="font-bold text-5xl lg:text-7xl text-[#FFFFFF] font-roboto mt-2.5 mb-8 w-[102%] lg:w-[80%] text-center items-center justify-center lg:items-left lg:text-left">
                    {item.heading}
                  </h4>
                  <h4 className="text-[#82869A] font-bold text-[18px] lg:text-2xl font-roboto text-2xl w-[98%]">
                    {item.content}
                  </h4>
                  <p className="text-[#82869A] font-normal font-inter text-[16px] mt-6 w-[98%] md:w-[96%] lg:w-[80%]">
                    {item.description1}
                  </p>

                  <p className="text-[#82869A] font-normal font-inter text-[16px] lg:text-[16px] mt-6 w-[98%] md:w-[96%] lg:w-[80%]">
                    {item.description3}
                  </p>
                </div>
              ))}
            </div>
            <div className="">
              <div className="lg:shadow-md lg:shadow-violet-500 rounded-md ">
                <img
                  className="mt-[30px] lg:mt-[-60px] w-[80%] h-[40%] rounded-md overflow-hidden object-cover mx-auto "
                  src="assets/img/vision2.jpg"
                  alt="img"
                />
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Aboutteam;
