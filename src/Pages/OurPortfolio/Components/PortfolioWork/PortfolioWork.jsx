import React from "react";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import { PortfoliocardsData } from "./PortfoliocardsData";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PortfolioWork = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 4;
  const totalItems = PortfoliocardsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = PortfoliocardsData.slice(startIndex, endIndex);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Container>
        <div className="mt-[100px] mb-[100px]">
          <div className="text-center lg:text-left">
            <span className="text-[#FF5E3A] font-bold font-roboto text-[14px]">
              ------WORKS
            </span>
            <h4 className="font-bold text-[45px] text-[#FFFFFF] font-roboto">
              Check Out Our Latest Works{" "}
            </h4>
            <p className="text-[#82869A] font-normal font-inter text-[16px] mb-4">
              Proin et magna blandit arcu pellentesque scelerisque sit amet a
              sapien aenean
            </p>
          </div>
          <div className=" p-8 ">
            <div className="mt-[30px] lg:mt-[50px] ">
              <div className="grid md:grid-cols-2  lg:gap-x-[50px] gap-y-[50px] gap-5 mt-10 ">
                {currentItems?.map((item, id) => (
                  <div
                    className="relative items-center justify-center"
                    key={id}
                  >
                    <div className="p-[20px] overflow-hidden object-center opacity-40 hover:opacity-10 hover:scale-105 transition-all duration-900 cursor-all cursor-pointer shadow-md shadow-cyan-700 bg-cyan-950">
                      <img
                        className="w-[550px] h-[300px] "
                        src={item.src}
                        alt="img"
                      />
                    </div>
                    <div className="absolute bottom-[20px]  left-[30px] ">
                      <h4 className="font-bold text-[36px] text-[#FFFFFF] font-roboto ">
                        {item.title}
                      </h4>
                      <p className="text-[#ffffff] font-normal mb-[30px] font-inter text-[16px] gap-x-20">
                        {item.description}
                        <span className="text-[#FF5E3A] ml-6">{item.para}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Pagination className="mt-[50px] mx-2 lg:mx-[30%]">
                <PaginationContent className=" gap-8">
                  <PaginationItem
                    className="justify-end bg-amber-50 p-[15px_20px] text-black rounded-md"
                    href="#"
                    onClick={() =>
                      currentPage > 1 && handlePageChange(currentPage - 1)
                    }
                  >
                    <FaArrowLeft />
                  </PaginationItem>
                  {[...Array(totalPages).keys()].map((number) => (
                    <PaginationItem>
                      <PaginationLink
                        isActive={number + 1 === currentPage}
                        onClick={() => handlePageChange(number + 1)}
                        className=" active:hover:zoom-in-90 active:scale-110 hover:bg-[#944a3b1c]  p-[20px_25px] text-[14px]  border border-[#FF5E3A] text-[#FF5E3A] hover:text-[#FF5E3A] transition-all duration-400 font-bold font-roboto gap-x-4"
                        href="#"
                      >
                        {number + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem
                    className=" bg-amber-50 p-[15px_20px] text-black rounded-md"
                    href="#"
                    onClick={() =>
                      currentPage < totalPages &&
                      handlePageChange(currentPage + 1)
                    }
                  >
                    <FaArrowRight />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PortfolioWork;
