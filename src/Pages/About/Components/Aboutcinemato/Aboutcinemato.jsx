import React from "react";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import { Button } from "@/components/ui/button";

const Aboutcinemato = () => {
  return (
    <>
      <div className=" p-8 ">
        <Container>
          <div className="grid lg:grid-cols-2 w-[85vw] md:w-[80vw] hover:rounded-3xl shadow-[0px_8px_25px_8px] gap-x-[50px] shadow-[#373049] mt-7 mx-auto lg:mx-0">
            <img
              src="assets/img/camera1.jpg"
              alt="img"
              className="h-[100%] mx-50% sm:mx-auto lg:mx-0 w-[85vw] md:w-[80vw] lg:w-[100%] hover:rounded-3xl hover:shadow-[0px_8px_25px_8px] shadow-[#373049]"
            />

            <div className=" text-center lg:text-left p-[20px] lg:p-0 lg:ml-[-30px] xl:ml-0">
              <p className="text-[#FF5E3A] font-bold font-roboto text-[14px]">
                ------ Our Cinematography
              </p>
              <h4 className="font-bold text-[32px] md:text-[72px] text-[#FFFFFF] font-roboto mt-2.5  ">
                Cinematography and Film Production
              </h4>
              <h3 className="font-roboto text-[24px] font-bold mt-[30px] mb-[30px] text-[#82869A]">
                Our video production company is here to help you create stunning
                images from start to finish.
              </h3>
              <p className="text-[#82869A] font-normal mb-[30px] font-inter text-[16px] ]">
                Proin et magna blandit arcu pellentesque scelerisque sit amet a
                sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis
                dui. Integer consequat consectetur est id blandit. Proin et
                magna blandit arcu pellentesque scelerisque sit amet a sapien.{" "}
              </p>
              <div className="mb-1">
                <Button className="cursor-pointer p-[20px_35px] text-[14px] bg-transparent border border-[#FF5E3A] hover:bg-[#FF5E3A] transition-all duration-400 font-bold font-roboto text-[#FFFFFF]">
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Aboutcinemato;
