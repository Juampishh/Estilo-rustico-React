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
import { useSelector } from "react-redux";
const Orders = () => {
  const estado = false;

  const { cartItems } = useSelector((state) => state.cart);
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
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item) => (
                <StyledCardOrder key={item.id}>
                  <img src={item.imagen} alt="" />
                  <h1>Detalles del pedido</h1>
                  <p>Nombre: {item.categoria.nombre}</p>
                  <p>Fecha de la compra: 12/10/2023 </p>
                  <p>
                    Cantidad reservada: <span>{item.quantity}</span>
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
              ))
            ) : (
              <h1
                style={{
                  width: "30%",
                  backgroundColor: "rgba(0,0,0,0.8)",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  borderBottom: "1px solid #000",
                  borderTop: "1px solid #000",
                  color: "#ffff",
                }}
              >
                No hay órdenes
              </h1>
            )}
          </StyledCardOrderContainer>
        </StyledOrdersContainer>
        <Footer />
      </StyledHomeContainer>
    </>
  );
};

export default Orders;
