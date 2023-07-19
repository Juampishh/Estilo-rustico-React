import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  StyledCartContainer,
  StyledMenuContainer,
  StyledNavbarContainer,
  StyledSocialContainer,
} from "./StyledNavbar";
import Carrito from "../Carrito/Carrito";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
