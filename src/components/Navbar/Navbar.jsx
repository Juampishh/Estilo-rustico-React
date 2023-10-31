import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdContactPhone } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsFillInfoSquareFill } from "react-icons/bs";
import {
  StyledCartContainer,
  StyledNavbarContainer,
  StyledSocialContainer,
} from "./StyledNavbar";
import Carrito from "../Carrito/Carrito";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  return (
    <>
      <StyledNavbarContainer>
        <StyledSocialContainer>
          <h1>Estilo Rustico</h1>
          <li>
            <AiFillHome /> <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <MdContactPhone /> <NavLink to="/about"> Contacto</NavLink>
          </li>
          <li>
            <BsFillInfoSquareFill /> <NavLink to="/">Sobre Nosotros</NavLink>
          </li>

          <li>
            <FaUser />{" "}
            <NavLink to="/login">
              {currentUser ? `${currentUser.nombre}` : "Iniciar Sesion"}
            </NavLink>
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
