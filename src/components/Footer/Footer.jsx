import React from "react";
import { StyledFooterContainer, StyledLinksFooter } from "./StyledFooter";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledLinksFooter>
        <h1>Estilo rustico</h1>
        <p>Ruta Nacional N°12 Km 1021</p>
        <p>+54-9-3794-237037</p>
        <p>gerencia@merakiarg.com</p>
      </StyledLinksFooter>
      <StyledLinksFooter>
        <h1>Enlaces</h1>
        <NavLink to="/">
          {" "}
          <p>Inicio</p>
        </NavLink>
        <NavLink to="/about">
          {" "}
          <p>Contacto</p>
        </NavLink>
        <NavLink to="/">
          {" "}
          <p>Sobre Nosotros</p>
        </NavLink>
        <NavLink to="/login">
          {" "}
          <p>Iniciar Sesion</p>
        </NavLink>
      </StyledLinksFooter>
      <StyledLinksFooter>
        <h1>Redes sociales</h1>
        <a href="#">
          <BsFacebook />
        </a>
        <a href="#">
          <AiFillInstagram />
        </a>
        <a href="#">
          <BsFillTelephoneFill />
        </a>
      </StyledLinksFooter>

      <StyledLinksFooter>
        <h1
          style={{
            fontSize: "20px",
            textAlign: "center",
            borderBottom: "1px solid #000",
          }}
        >
          Desarrollado por: Juan Pablo Merino
        </h1>
      </StyledLinksFooter>
    </StyledFooterContainer>
  );
};

export default Footer;
