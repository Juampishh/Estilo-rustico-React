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
import ModalUser from "../ModalUser/ModalUser";
import { setCurrentUser, toggleMenu } from "../Redux/User/userSlice";
function Navbar() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <StyledNavbarContainer>
        <StyledSocialContainer>
          <h1>
            <NavLink style={{ color: "white" }} to="/">
              Estilo Rustico
            </NavLink>
          </h1>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/about"> Contacto</NavLink>
          </li>

          <li>
            <p
              onClick={() =>
                currentUser.currentUser
                  ? dispatch(toggleMenu())
                  : navigate("/login")
              }
            >
              {currentUser.currentUser
                ? currentUser.currentUser.nombre
                : "Iniciar Sesion"}
            </p>
          </li>
        </StyledSocialContainer>
        {currentUser.currentUser && <ModalUser />}
        <StyledCartContainer>
          <figure
            onClick={() =>
              currentUser.currentUser
                ? dispatch(toggleMenu())
                : navigate("/login")
            }
          >
            <FaUser />
            <p style={{ fontSize: "15px" }}>
              {currentUser.currentUser
                ? currentUser.currentUser.nombre
                : "User"}
            </p>
          </figure>

          <Carrito />
        </StyledCartContainer>
      </StyledNavbarContainer>
    </>
  );
}

export default Navbar;
