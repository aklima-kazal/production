import React, { useEffect } from "react";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import { Button } from "@/components/ui/button";
import { motion, useAnimate, useAnimation } from "motion/react";
import { useMediaQuery } from "react-responsive";

const Aboutus = () => {
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
    <>
      <div className=" p-6">
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
                className="mt-[40px] lg:mt-[80px] text-center items-center justify-center lg:items-left lg:text-left "
              >
                <p className="text-[#FF5E3A] font-bold font-roboto text-[14px]">
                  ------ About Us
                </p>

                <h4 className="font-bold text-7xl text-[#FFFFFF] font-roboto mt-2.5 mb-8 w-[102%] lg:w-[80%] text-center items-center justify-center lg:items-left lg:text-left">
                  We Are a Team of Passionate Filmmakers
                </h4>
                <h4 className="text-[#82869A] font-bold font-roboto text-2xl lg:w-[80%]">
                  Dedicated to bringing creative and compelling stories to life
                  on screen
                </h4>
                <p className="text-[#82869A] font-normal font-inter text-[16px] mt-6 lg:w-[80%]">
                  Proin et magna blandit arcu pellentesque scelerisque sit amet
                  a sapien. Aenean purus nunc, cursus in ante in, vehicula
                  facilisis dui. Integer consequat consectetur est id blandit.
                  Proin et magna blandit arcu pellentesque scelerisque sit amet.
                </p>
                <div className="mt-6">
                  <Button className="cursor-pointer p-[20px_35px] text-[14px] bg-transparent border border-[#FF5E3A] hover:bg-[#FF5E3A] transition-all duration-400 font-bold font-roboto text-[#FFFFFF]">
                    learn more
                  </Button>
                </div>
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
                  className="shadow-md shadow-violet-500 rounded-md "
                >
                  <img
                    className="mt-[40px] lg:mt-[-90px] rounded-md w-full h-full object-cover overflow-hidden"
                    src="assets/img/vision2.jpg"
                    alt="img"
                  />
                </motion.div>
              </motion.div>
            </div>
          ) : (
            <div>
              <div className="mt-[40px] lg:mt-[80px] order-0 text-center items-center justify-center lg:items-left lg:text-left ">
                <p className="text-[#FF5E3A] font-bold font-roboto text-[14px]">
                  ------ About Us
                </p>

                <h4 className="font-bold text-7xl text-[#FFFFFF] font-roboto mt-2.5 mb-8 w-[102%] lg:w-[80%] text-center items-center justify-center lg:items-left lg:text-left">
                  We Are a Team of Passionate Filmmakers
                </h4>
                <h4 className="text-[#82869A] font-bold font-roboto text-2xl lg:w-[80%]">
                  Dedicated to bringing creative and compelling stories to life
                  on screen
                </h4>
                <p className="text-[#82869A] font-normal font-inter text-[16px] mt-6 lg:w-[80%]">
                  Proin et magna blandit arcu pellentesque scelerisque sit amet
                  a sapien. Aenean purus nunc, cursus in ante in, vehicula
                  facilisis dui. Integer consequat consectetur est id blandit.
                  Proin et magna blandit arcu pellentesque scelerisque sit amet.
                </p>
                <div className="mt-6">
                  <Button className="cursor-pointer p-[20px_35px] text-[14px] bg-transparent border border-[#FF5E3A] hover:bg-[#FF5E3A] transition-all duration-400 font-bold font-roboto text-[#FFFFFF]">
                    learn more
                  </Button>
                </div>
              </div>
              <div className="">
                <div className="shadow-md shadow-violet-500 rounded-md ">
                  <img
                    className="mt-[40px] lg:mt-[-90px] rounded-md w-full h-full overflow-hidden object-cover"
                    src="assets/img/vision2.jpg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default Aboutus;
