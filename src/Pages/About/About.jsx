import React from "react";
import AboutBanner from "./Components/AboutBanner/AboutBanner";
import Aboutus from "../Home/Components/Aboutus/Aboutus";
import Aboutteam from "./Components/Aboutteam/Aboutteam";
import Aboutcinemato from "./Components/Aboutcinemato/Aboutcinemato";
import Aboutdirectors from "./Components/Aboutdirectors/Aboutdirectors";
import Abouttestimonial from "./Components/Abouttestimonial/Abouttestimonial";

const About = () => {
  return (
    <>
      <AboutBanner />
      <Aboutteam />
      <Aboutcinemato />
      <Aboutdirectors />
      <Abouttestimonial />
    </>
  );
};

export default About;
