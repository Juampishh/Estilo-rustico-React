import React from "react";
import {
  StyledCartContainer,
  StyledNavbarContainer,
  StyledSocialContainer,
} from "./StyledNavbar";
import { NavLink } from "react-router-dom";
import Carrito from "../Carrito/Carrito";

function Navbar() {
  return (
    <>
      <StyledNavbarContainer>
        <StyledSocialContainer>
          <h1>Estilo Rustico</h1>
          <li>
            <NavLink to="/about">Contacto</NavLink>
          </li>
          <li>
            <NavLink to="/">Sobre Nosotros</NavLink>
          </li>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
        </StyledSocialContainer>
        <StyledCartContainer>
          <Carrito />
        </StyledCartContainer>
      </StyledNavbarContainer>
    </>
  );
}

export default Navbar;
