import React from "react";
import { StyledHomeContainer } from "../Home/StyledHome";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  StyledPerfilCard,
  StyledPerfilContainer,
  StyledPerfilImageContainer,
  StyledPerfilInformationContainer,
} from "./StyledPerfil";
import { useSelector } from "react-redux";

const Perfil = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <StyledHomeContainer>
        <Navbar />
        <StyledPerfilContainer>
          <h1>Perfil</h1>
          <StyledPerfilCard>
            <StyledPerfilInformationContainer>
              <h1>Informacion del usuario</h1>
              <h2>Usuario</h2>
              <p>{user.currentUser.nombre}</p>
              <h2>Email</h2>
              <p>{user.currentUser.email}</p>
            </StyledPerfilInformationContainer>
            <StyledPerfilImageContainer>
              <img src="./public/img/logo.jpg" alt=""></img>
            </StyledPerfilImageContainer>
          </StyledPerfilCard>
        </StyledPerfilContainer>
        <Footer />
      </StyledHomeContainer>
    </>
  );
};

export default Perfil;
