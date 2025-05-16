import React from "react";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import Studios from "@/assets/images/studios.jpg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FAQdata2, FAQdata1, FAQdata3, FAQdata5, FAQdata4 } from "./FAQdata";

const FAQ = () => {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [isOpen4, setIsOpen4] = React.useState(false);
  const [isOpen5, setIsOpen5] = React.useState(false);

  const handleClick1 = () => {
    setIsOpen1(!isOpen1);
  };
  const handleClick2 = () => {
    setIsOpen2(!isOpen2);
  };
  const handleClick3 = () => {
    setIsOpen3(!isOpen3);
  };
  const handleClick4 = () => {
    setIsOpen4(!isOpen4);
  };
  const handleClick5 = () => {
    setIsOpen5(!isOpen5);
  };
  return (
    <>
      <Container className="mb-[100px]">
        <div className=" text-center">
          <span className="text-[#FF5E3A] font-bold font-roboto text-[14px]">
            ------ FAQ
          </span>
          <h4 className="font-bold text-[72px]  mb-[20px] text-[#FFFFFF] font-roboto mt-[10px] leading-[72px]">
            Pricing FAQs
          </h4>
          <p className="text-[#82869A] font-normal font-inter text-[16px]">
            Proin et magna blandit arcu pellentesque scelerisque sit amet a
            sapien aenean
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-x-[80px] mt-[50px]">
          <div className="mt-8 p-10 lg:p-0">
            {FAQdata1?.map((item, i) => {
              return (
                <>
                  <div
                    onClick={handleClick1}
                    className="flex items-center justify-between mb-8 cursor-pointer"
                    key={i}
                  >
                    <h4 className="text-[#82869A] text-4xl font-bold font-roboto hover:text-white">
                      {item.title}
                    </h4>
                    {isOpen1 ? (
                      <FaAngleUp className="text-[#82869a] hover:text-white w-6 h-6" />
                    ) : (
                      <FaAngleDown className="text-[#82869a] hover:text-white w-6 h-6" />
                    )}
                  </div>
                  {(isOpen1 && (
                    <div>
                      <p className="text-[16px] text-[#82869A] font-normal font-inter">
                        {item.description}
                      </p>
                    </div>
                  )) ||
                    null}
                </>
              );
            })}
            <div className="">
              {FAQdata2?.map((item, i) => {
                return (
                  <>
                    <div
                      onClick={handleClick2}
                      className="flex items-center justify-between mb-8 cursor-pointer hover:text-amber-50"
                      key={i}
                    >
                      <h4 className="text-[#82869A] text-4xl font-bold font-roboto hover:text-white">
                        {item.title}
                      </h4>
                      {isOpen2 ? (
                        <FaAngleUp className="text-[#82869a] hover:text-white w-6 h-6" />
                      ) : (
                        <FaAngleDown className="text-[#82869a] hover:text-white w-6 h-6" />
                      )}
                    </div>
                    {(isOpen2 && (
                      <div>
                        <p className="text-[16px] text-[#82869A] font-normal font-inter">
                          {item.description}
                        </p>
                      </div>
                    )) ||
                      null}
                  </>
                );
              })}

              <div className="">
                {FAQdata3?.map((item, i) => {
                  return (
                    <>
                      <div
                        onClick={handleClick3}
                        className="flex  items-center justify-between mb-8 cursor-pointer"
                        key={i}
                      >
                        <h4 className="text-[#82869A] text-4xl font-bold font-roboto hover:text-amber-50">
                          {item.title}
                        </h4>

                        {isOpen3 ? (
                          <FaAngleUp className="text-[#82869a] hover:text-white w-6 h-6" />
                        ) : (
                          <FaAngleDown className="text-[#82869a] hover:text-white w-6 h-6" />
                        )}
                      </div>
                      {(isOpen3 && (
                        <div>
                          <p className="text-[16px] text-[#82869A] font-normal font-inter">
                            {item.description}
                          </p>
                        </div>
                      )) ||
                        null}
                    </>
                  );
                })}
              </div>
              <div className="">
                {FAQdata4?.map((item, i) => {
                  return (
                    <>
                      <div
                        onClick={handleClick4}
                        className="flex items-center justify-between mb-8 cursor-pointer"
                        key={i}
                      >
                        <h4 className="text-[#82869A] text-4xl font-bold font-roboto hover:text-white">
                          {item.title}
                        </h4>
                        {isOpen4 ? (
                          <FaAngleUp className="text-[#82869a] hover:text-white w-6 h-6" />
                        ) : (
                          <FaAngleDown className="text-[#82869a] hover:text-white w-6 h-6" />
                        )}
                      </div>
                      {(isOpen4 && (
                        <div>
                          <p className="text-[16px] text-[#82869A] font-normal font-inter">
                            {item.description}
                          </p>
                        </div>
                      )) ||
                        null}
                    </>
                  );
                })}
              </div>
              <div className="">
                {FAQdata5?.map((item, i) => {
                  return (
                    <>
                      <div
                        className="flex items-center justify-between mb-8 cursor-pointer"
                        key={i}
                        onClick={handleClick5}
                      >
                        <h4 className="text-[#82869A] text-4xl font-bold font-roboto hover:text-white">
                          {item.title}
                        </h4>
                        {isOpen5 ? (
                          <FaAngleUp className="text-[#82869a] hover:text-white w-6 h-6" />
                        ) : (
                          <FaAngleDown className="text-[#82869a] hover:text-white w-6 h-6" />
                        )}
                      </div>
                      {(isOpen5 && (
                        <div>
                          <p className="text-[16px] text-[#82869A] font-normal font-inter">
                            {item.description}
                          </p>
                        </div>
                      )) ||
                        null}
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="order-first lg:order-last ">
            <img
              src={Studios}
              alt="img"
              className="w-[78%] h-[530px] object-cover rounded-[5px] shadow-[0px_8px_20px_8px] overflow-hidden mx-auto "
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default FAQ;
