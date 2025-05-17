import React from "react";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import { motion } from "framer-motion";

const CommercialBanner = () => {
  return (
    <>
      <div className="w-full mt-[-150px] text-center p-20  bg-radial-[at_10%_25%] from-rose-950 to-slate-900 to-75%">
        <Container>
          <motion.div className="mt-[100px]" animate={{ x: [70, 20, 10] }}>
            <h4 className="text-[#FF5E3A]  font-bold font-roboto text-[14px] uppercase">
              ------our Portfolio
            </h4>

            <div className="mb-[40px]">
              <p className="font-bold text-7xl font-roboto mt-2.5 mb-5 text-[#FFFFFF] capitalize">
                TV Commecial
              </p>
              <span className="text-[#FFFFFF] font-bold font-roboto text-[14px] uppercase">
                commercials
              </span>
            </div>
          </motion.div>
        </Container>
      </div>
    </>
  );
};

export default CommercialBanner;
