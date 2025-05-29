import React from "react";
import Container from "@/GlobalComponents/GlobalContainer/Container";
import { Workinfo } from "./Workinfo/Workinfo";
import { WorksData } from "./WorksData";
import Workscontent from "./Workcontent/workscontent";

const Works = () => {
  return (
    <>
      <div className=" p-8 ">
        <Container>
          <div className="mt-[50px] ">
            <Workscontent />
            <div className="grid lg:grid-cols-2 gap-x-[20px] md:gap-x-[50px] gap-y-[50px]  mt-10 ">
              {WorksData.map((item, id) => (
                <Workinfo
                  src={item.src}
                  title={item.title}
                  description={item.description}
                  para={item.para}
                  key={id}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Works;
