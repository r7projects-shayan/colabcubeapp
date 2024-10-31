import React from "react";
import Hero from "./Hero";
import { Extended } from "./Features";
import { Features } from "./Landing_Page/Features";
// import { VelocityText } from "./Scrolltext";
import AboutTeam from "./Landing_Page/Aboutteam";

import { Near } from "./demo/Near";

import Choose from "./Choose";

import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div>
      <Hero />

      <Features />
      <Extended />
      <AboutTeam />
      <Near />
      <Choose />

      <ContactUs />
    </div>
  );
};

export default Home;
