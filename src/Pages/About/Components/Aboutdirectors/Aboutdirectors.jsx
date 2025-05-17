import React, { useEffect } from "react";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import { motion } from "framer-motion";
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

const Aboutdirectors = () => {
  return (
    <>
      <div className=" p-6 ">
        <Container>
          <div className=" items-center justify-center text-center mb-[40px] ">
            <motion.div animate={{ y: [70, 20, 10] }} className="mt-[40px]">
              <motion.div className="items-center justify-center">
                <img
                  src="assets/img/film5.jpg"
                  className="w-[1100px] opacity-80 mx-auto object-cover overflow-hidden rounded-[5px]  h-[580px] cursor-pointer shadow-[0px_8px_20px_8px] inset-shadow-xl inset-shadow-indigo-500 ..."
                  alt="img"
                />
              </motion.div>
            </motion.div>

            <Drawer>
              <DrawerTrigger>
                <FaDoorOpen className="text-violet-800 shadow-2xl hover:scale-110 h-14 w-10 cursor-pointer mt-5" />
              </DrawerTrigger>
              <DrawerContent>
                <div className="flex mt-[-280px] md:mt-[-500px] lg:mt-[-300px] w-[130%] lg:w-[100%]">
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
                      Our team is made up of experienced and talented filmmakers
                      who share a common goal
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
        </Container>
      </div>
    </>
  );
};

export default Aboutdirectors;
