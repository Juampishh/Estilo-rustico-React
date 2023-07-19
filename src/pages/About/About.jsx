import React from "react";
import { StyledHomeContainer } from "../Home/StyledHome";
import Navbar from "../../components/Navbar/Navbar";

import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";

const About = () => {
  return (
    <>
      <StyledHomeContainer>
        <Navbar />
        <Contact />
        <Footer />
      </StyledHomeContainer>
    </>
  );
};

export default About;
