import React from "react";
import Banner from "./Components/Banner/Banner";
import About from "../About/About";
import Aboutus from "./Components/Aboutus/Aboutus";
import Partner from "./Components/Partner/Partner";
import Directors from "./Components/Directors/Directors";
import Cinematography from "./Components/Cinematography/Cinematography";
import Works from "./Components/Works/Works";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";
import Blog from "./Components/Blog/Blog";
import Collaborate from "./Components/Collaborate/Collaborate";

const Home = () => {
  return (
    <>
      <Banner />
      <Aboutus />
      <Partner />
      <Directors />
      <Cinematography />
      <Works />
      <Services />
      <Testimonial />
      <Blog />
      <Collaborate />
    </>
  );
};

export default Home;
