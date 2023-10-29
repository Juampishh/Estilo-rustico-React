import React from "react";
import { StyledHomeContainer } from "../Home/StyledHome";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { StyledLoginBox, StyledLoginContainer } from "./StyledLogin";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <StyledHomeContainer>
      <Navbar />
      <StyledLoginContainer>
        <img src="./public/img/header.jpg" alt="" />
        <h1>Iniciar Sesion</h1>
        <StyledLoginBox>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" />
          <button type="submit">Iniciar Sesion</button>
          <h2 style={{ fontSize: "18px" }}>
            ¿No tienes una cuenta?{" "}
            <NavLink to="/register">Registrate aqui</NavLink>
          </h2>
        </StyledLoginBox>
      </StyledLoginContainer>
      <Footer />
    </StyledHomeContainer>
  );
};

export default Login;
