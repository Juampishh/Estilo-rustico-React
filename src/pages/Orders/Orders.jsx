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
import { VscVerifiedFilled } from "react-icons/vsc";
import { MdOutlinePendingActions } from "react-icons/md";

const Orders = () => {
  const estado = true;
  const estado2 = false;
  return (
    <>
      <StyledHomeContainer
        style={{
          overflowY: "scroll",
        }}
      >
        <Navbar />
        <StyledTitleContainer>
          <h1>Mis ordenes</h1>
        </StyledTitleContainer>
        <StyledOrdersContainer>
          <StyledCardOrderContainer>
            <StyledCardOrder>
              <img src={productos[2].imagen} alt="" />
              <h1>Detalles del pedido</h1>
              <p>Nombre: {productos[2].categoria.nombre}</p>
              <p>Fecha de la compra: 12/10/2023 </p>
              <p>
                Cantidad reservada: <span>6</span>
              </p>
              <p>
                Estado del pedido:{" "}
                {estado ? (
                  <VscVerifiedFilled
                    style={{ color: "green", fontSize: "1.3rem" }}
                  />
                ) : (
                  <MdOutlinePendingActions
                    style={{ color: "orange", fontSize: "1.3rem" }}
                  />
                )}{" "}
              </p>
            </StyledCardOrder>
            <StyledCardOrder>
              <img src={productos[1].imagen} alt="" />
              <h1>Detalles del pedido</h1>
              <p>Nombre:{productos[1].categoria.nombre}</p>
              <p>Fecha de la compra: 12/10/2023 </p>
              <p>
                Cantidad reservada: <span>6</span>
              </p>
              <p>
                Estado del pedido:{" "}
                {estado2 ? (
                  <VscVerifiedFilled
                    style={{ color: "green", fontSize: "1.3rem" }}
                  />
                ) : (
                  <MdOutlinePendingActions
                    style={{ color: "orange", fontSize: "1.3rem" }}
                  />
                )}{" "}
              </p>
            </StyledCardOrder>
            <StyledCardOrder>
              <img src={productos[3].imagen} alt="" />
              <h1>Detalles del pedido</h1>
              <p>Nombre:{productos[3].categoria.nombre}</p>
              <p>Fecha de la compra: 12/10/2023 </p>
              <p>
                Cantidad reservada: <span>6</span>
              </p>
              <p>
                Estado del pedido:{" "}
                {estado ? (
                  <VscVerifiedFilled
                    style={{ color: "green", fontSize: "1.3rem" }}
                  />
                ) : (
                  <MdOutlinePendingActions
                    style={{ color: "orange", fontSize: "1.3rem" }}
                  />
                )}{" "}
              </p>
            </StyledCardOrder>
            <StyledCardOrder>
              <img src={productos[4].imagen} alt="" />
              <h1>Detalles del pedido</h1>
              <p>Nombre:{productos[4].categoria.nombre}</p>
              <p>Fecha de la compra: 12/10/2023 </p>
              <p>
                Cantidad reservada: <span>6</span>
              </p>
              <p>
                Estado del pedido:{" "}
                {estado2 ? (
                  <VscVerifiedFilled
                    style={{ color: "green", fontSize: "1.3rem" }}
                  />
                ) : (
                  <MdOutlinePendingActions
                    style={{ color: "orange", fontSize: "1.3rem" }}
                  />
                )}{" "}
              </p>
            </StyledCardOrder>
          </StyledCardOrderContainer>
        </StyledOrdersContainer>
        <Footer />
      </StyledHomeContainer>
    </>
  );
};

export default Orders;
