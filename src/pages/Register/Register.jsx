import React from "react";
import { StyledHomeContainer } from "../Home/StyledHome";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { StyledLoginBox, StyledLoginContainer } from "../Login/StyledLogin";
import { NavLink } from "react-router-dom";
const Register = () => {
  return (
    <StyledHomeContainer>
      <Navbar />
      <StyledLoginContainer>
        <img src="./public/img/header.jpg" alt="" />
        <h1>Iniciar Sesion</h1>
        <StyledLoginBox style={{ height: "500px" }}>
          <label htmlFor="name">Nombre</label>
          <input type="email" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" />
          <button type="submit">Registrarse</button>
          <h2 style={{ fontSize: "18px" }}>
            ¿Tienes una cuenta?{" "}
            <NavLink to="/login">Inicia sesion aqui</NavLink>
          </h2>
        </StyledLoginBox>
      </StyledLoginContainer>
      <Footer />
    </StyledHomeContainer>
  );
};

export default Register;
