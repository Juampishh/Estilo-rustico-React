import React from "react";
import { StyledHomeContainer } from "../Home/StyledHome";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  StyledCardOrder,
  StyledCardOrderContainer,
  StyledOrdersContainer,
  StyledTitleContainer,
} from "./StyledOrders";
import productos from "../../assets/Data/data";

const Orders = () => {
  return (
    <>
      <StyledHomeContainer>
        <Navbar />
        <StyledOrdersContainer>
          <StyledTitleContainer>
            <h1>Mis ordenes</h1>
          </StyledTitleContainer>
          <StyledCardOrderContainer>
            <StyledCardOrder>
              <img src={productos[1].imagen} alt="" />
              <p>Tipo:{productos[1].titulo}</p>
              <p>Nombre:{productos[1].categoria.nombre}</p>
              <p>Cantidad de unidades por m2:{productos[1].unidades}</p>
              <p>Precio:{productos[1].precio}</p>
            </StyledCardOrder>
            <StyledCardOrder>
              <img src={productos[1].imagen} alt="" />
              <p>Tipo:{productos[1].titulo}</p>
              <p>Nombre:{productos[1].categoria.nombre}</p>
              <p>Cantidad de unidades por m2:{productos[1].unidades}</p>
              <p>Precio:{productos[1].precio}</p>
            </StyledCardOrder>
          </StyledCardOrderContainer>
        </StyledOrdersContainer>
        <Footer />
      </StyledHomeContainer>
    </>
  );
};

export default Orders;
