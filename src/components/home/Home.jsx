import React from "react";
import Hero from "./hero/Hero";
import Numbers from "./numbers/Numbers";
import Features from "./features/Features";
import Pricing from "./pricing/Pricing";

const Home = () => {
  return (
    <div className="home">
      <Hero />
			<Numbers/>
      <Features/>
      <Pricing/>
    </div>
  );
};

export default Home;
