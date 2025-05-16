import React from "react";
import RootLayout from "./Layout/RootLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Home from "./Pages/Home/Home";
import { RouterProvider } from "react-router";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import OurPortfolio from "./Pages/OurPortfolio/Works";
import Testimonials from "./Pages/Commercial/Testimonials";
import Pricing from "./Pages/Pricing/Pricing";
import Blog from "./Pages/Blog/Contact";
import Contact from "./Pages/Blog/Contact";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<OurPortfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
