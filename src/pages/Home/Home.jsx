import React from "react";
import { StyledHomeContainer } from "./StyledHome";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <StyledHomeContainer>
      <Navbar />
      <Hero />
      <Cards />

      <Footer />
    </StyledHomeContainer>
  );
};

export default Home;
