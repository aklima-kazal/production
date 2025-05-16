import Container from "@/GlobalComponents/GlobalContainer/Container";
import React from "react";
import ReactPlayer from "react-player";

const TVplay = () => {
  return (
    <>
      <Container>
        <div className="mt-[100px] mb-[100px] mx-[5%] md:mx-[10%] lg:mx-[20%] ">
          <ReactPlayer
            className=""
            url="https://youtu.be/mWXrM-OKBNQ?si=L5q5CROdZXJbgwi9"
            controls
            width="100%"
            height="60vh"
          />
        </div>
      </Container>
    </>
  );
};

export default TVplay;
