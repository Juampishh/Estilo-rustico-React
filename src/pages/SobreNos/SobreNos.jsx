import React from "react";
import { StyledHomeContainer } from "../Home/StyledHome";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  StyledCardSobreNos,
  StyledSobreNosButtonContainer,
  StyledSobreNosContainer,
  StyledSobreNosInformationContainer,
} from "./StyledSobreNos";

const SobreNos = () => {
  return (
    <>
      <StyledHomeContainer>
        <Navbar />
        <StyledSobreNosContainer>
          <StyledSobreNosInformationContainer>
            <h1>Estilo rustico</h1>
            <StyledCardSobreNos>
              <h2>¿Quienes somos?</h2>
              <p>
                Somos una empresa, con más de 20 años de experiencia en el rubro
                de la construcción. Contamos con un equipo de profesionales
                altamente capacitados para brindarle el mejor asesoramiento y
                servicio a nuestros clientes.
              </p>
            </StyledCardSobreNos>
            <StyledCardSobreNos>
              <h2>¿A que nos dedicamos?</h2>
              <p>
                Nos dedicamos a la venta de hormigones pigmentados, atermicos, y
                artículos de jardin. Contamos con una amplia variedad de
                productos para todos los gustos y necesidades.
              </p>
            </StyledCardSobreNos>
            <StyledCardSobreNos>
              <h2>¿ Donde nos encontramos ?</h2>
              <p>Ruta Nacional N°12 Km 1021</p>
            </StyledCardSobreNos>
          </StyledSobreNosInformationContainer>
          <StyledSobreNosButtonContainer>
            <button>
              {" "}
              <a href="#">Saber mas</a>
            </button>
          </StyledSobreNosButtonContainer>
        </StyledSobreNosContainer>

        <Footer />
      </StyledHomeContainer>
    </>
  );
};

export default SobreNos;
