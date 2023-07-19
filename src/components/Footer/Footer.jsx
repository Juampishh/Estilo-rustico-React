import React from "react";
import { StyledFooterContainer, StyledLinksFooter } from "./StyledFooter";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledLinksFooter>
        <h3>
          <BsFacebook />
        </h3>
        <h3>
          <AiFillInstagram />
        </h3>
        <h3>
          <BsFillTelephoneFill />
        </h3>
      </StyledLinksFooter>
      <StyledLinksFooter>
        <h3>Contacto</h3>
        <h3>Sobre Nosotros</h3>
        <h3>Local</h3>
      </StyledLinksFooter>
      <StyledLinksFooter>
        <h3>Politicas de Privacidad</h3>
        <h3>Copyrigth</h3>
        <h3>Dev:Juan Pablo Merino</h3>
      </StyledLinksFooter>
    </StyledFooterContainer>
  );
};

export default Footer;
