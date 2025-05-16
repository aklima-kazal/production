import React from "react";
import CommercialBanner from "./Components/CommercialBanner/CommercialBanner";
import TVplay from "./Components/TVplay/TVplay";
import ITconcise from "./Components/ITconcise/ITconcise";
import Audience from "./Components/Audience/Audience";
import LatestWork from "./Components/LatestWork/LatestWork";

const Testimonials = () => {
  return (
    <>
      <CommercialBanner />
      <TVplay />
      <ITconcise />
      <Audience />
      <LatestWork />
    </>
  );
};

export default Testimonials;
