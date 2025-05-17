import React, { useEffect } from "react";
import Film5 from "@/assets/images/film5.jpg";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FaDoorOpen } from "react-icons/fa6";
import { motion, useAnimate, useAnimation } from "motion/react";
import { useMediaQuery } from "react-responsive";

const Directors = () => {
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
      transition: { duration: 0.9, ease: "easeIn" },
    },
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      animationControl.start({
        scale: 1 - scrollY / 42000,
        opacity: 1 + scrollY / 400,
        transition: { duration: 0.4, ease: "easeIn" },
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className=" p-6 ">
        <Container>
          {isDesktopOrLaptop ? (
            <div className=" items-center justify-center text-center mt-[20px] lg:mt-[90px]  ">
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
              >
                <motion.div
                  animate={animationControl}
                  className="items-center justify-center"
                >
                  <img
                    src={Film5}
                    className="w-[1100px] opacity-80 mx-auto object-cover overflow-hidden rounded-[5px]  h-[580px] cursor-pointer shadow-[0px_8px_20px_8px] inset-shadow-xl inset-shadow-indigo-500 ..."
                    alt="img"
                  />
                </motion.div>
              </motion.div>

              <Drawer>
                <DrawerTrigger>
                  <FaDoorOpen className="text-violet-800 shadow-2xl hover:scale-110 h-14 w-10 cursor-pointer" />
                </DrawerTrigger>
                <DrawerContent>
                  <div className="flex mt-[-680px] md:mt-[-500px] lg:mt-[-300px]  ">
                    <div className="bg-[#0b0b33] rounded-[3px] p-4 lg:p-8 w-[30%] md:w-[35%] opacity-80 ml-[30px] lg:ml-[228px] ">
                      <p className="text-[#FF5E3A] font-bold font-roboto text-[14px]">
                        ---- directors
                      </p>
                      <h4 className="font-bold text-[35px] lg:text-[72px] lg:leading-[72px] text-[#FFFFFF] font-roboto lg:mt-2.5 ">
                        Meet the Our Video Directors
                      </h4>
                    </div>
                    <div className="bg-[#0b0b33] rounded-[3px] opacity-80 p-4 w-[25%]  md:w-[30%]">
                      <h4 className="font-bold text-[20px] lg:text-[24px] text-[#FFFFFF] font-roboto mt-2.5 mb-5">
                        Our team is made up of experienced and talented
                        filmmakers who share a common goal
                      </h4>
                      <p className="text-[#82869A] font-inter text-[16px] font-normal">
                        Proin et magna blandit arcu pellentesque scelerisque sit
                        amet a sapien. Aenean purus nunc cursus in ante in.
                      </p>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          ) : (
            <div className=" items-center justify-center text-center mt-[20px] lg:mt-[90px]  ">
              <div
                initial="hidden"
                whileInView="visible"
                variants={Animation}
                viewport={{ once: true }}
                transition={{
                  staggerChildren: 0.3,
                  duration: 0.5,
                  ease: "easeIn",
                }}
              >
                <div
                  animate={animationControl}
                  className="items-center justify-center"
                >
                  <img
                    src="assets/images/film5.jpg"
                    className="w-[1100px] opacity-80 mx-auto object-cover overflow-hidden rounded-[5px]  h-[580px] cursor-pointer shadow-[0px_8px_20px_8px] inset-shadow-xl inset-shadow-indigo-500 ..."
                    alt="img"
                  />
                </div>
              </div>

              <Drawer>
                <DrawerTrigger>
                  <FaDoorOpen className="text-violet-800 shadow-2xl hover:scale-110 h-14 w-10 cursor-pointer" />
                </DrawerTrigger>
                <DrawerContent>
                  <div className="flex mt-[-280px] md:mt-[-500px] lg:mt-[-300px] w-[130%] ">
                    <div className="bg-[#0b0b33] rounded-[3px] p-4 lg:p-8 w-[38%] md:w-[35%] opacity-80 ml-[25px] lg:ml-[228px] ">
                      <p className="text-[#FF5E3A] font-bold font-roboto text-[14px]">
                        ---- directors
                      </p>
                      <h4 className="font-bold text-[35px] lg:text-[72px] lg:leading-[72px] text-[#FFFFFF] font-roboto lg:mt-2.5 ">
                        Meet the Our Video Directors
                      </h4>
                    </div>
                    <div className="bg-[#0b0b33] rounded-[3px] opacity-80 sm:p-2 md:p-4 w-[30%]  md:w-[30%]">
                      <h4 className="font-bold sm:text-[16px] md:text-[20px] lg:text-[24px] text-[#FFFFFF] font-roboto mt-2.5 mb-5 ">
                        Our team is made up of experienced and talented
                        filmmakers who share a common goal
                      </h4>
                      <p className="text-[#82869A] font-inter text-[16px] font-normal">
                        Proin et magna blandit arcu pellentesque scelerisque sit
                        amet a sapien. Aenean purus nunc cursus in ante in.
                      </p>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default Directors;
