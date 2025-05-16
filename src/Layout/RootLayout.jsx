import React from "react";
import Header from "../GlobalComponents/Header/Header";

import TopBar from "../GlobalComponents/TopBar/TopBar";
import { Outlet } from "react-router";
import Footer from "@/GlobalComponents/Footer/Footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";

const RootLayout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Outlet />

      <Footer />
    </>
  );
};

export default RootLayout;
