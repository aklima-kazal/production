import React from "react";
import PriceBanner from "./Components/PriceBanner/PriceBanner";
import PricingPackge from "./Components/PricingPackge/PricingPackge";
import PriceCollaborate from "./Components/PriceCollaborate/PriceCollaborate";
import FAQ from "./Components/FAQ/FAQ";

const Pricing = () => {
  return (
    <>
      <PriceBanner />
      <PricingPackge />
      <PriceCollaborate />
      <FAQ />
    </>
  );
};

export default Pricing;
