import React from "react";
import { Link } from "react-router";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { motion } from "framer-motion";

const PriceBanner = () => {
  return (
    <>
      <div className="w-full mt-[-150px] text-center p-20  bg-radial-[at_10%_25%] from-rose-950 to-slate-900 to-75%">
        <Container>
          <motion.div animate={{ x: [70, 20, 10] }}>
            <div className="mt-[100px]">
              <h4 className="text-[#FF5E3A]  font-bold font-roboto text-[14px] uppercase">
                ------pricing
              </h4>
            </div>
            <div className=" gap-x-2 items-center justify-center">
              <h5 className="font-bold text-8xl font-roboto mt-2.5 mb-5 text-[#FFFFFF] capitalize">
                {window.location.pathname.split("/")[1]}
              </h5>
              <div className="flex gap-x-2 items-center justify-center">
                <div>
                  <FaHome className="text-[#FFFFFF]" />
                </div>
                <div>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink>
                          <Link to="/" className="text-[#FFFFFF]">
                            HOME
                          </Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <IoIosArrowForward className="text-[#FFFFFF]" />
                      <BreadcrumbItem>
                        <BreadcrumbLink>
                          <Link to="/pricing" className="text-[#FFFFFF]">
                            {window.location.pathname.split("/")[1]}
                          </Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
    </>
  );
};

export default PriceBanner;
