import React from "react";
import { StyledHomeContainer } from "../Home/StyledHome";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  StyledCardOrder,
  StyledCardOrderContainer,
  StyledCheckoutContainer,
  StyledForm,
  StyledFormContainer,
  StyledTitleContainer,
} from "./StyledCheckout";
import productos from "../../assets/Data/data";
import { useSelector } from "react-redux";
const Checkout = () => {
  const estado = true;
  const estado2 = false;
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      <StyledHomeContainer>
        <Navbar />
        <StyledCheckoutContainer>
          <StyledTitleContainer>
            <h1>Checkout</h1>
          </StyledTitleContainer>
          <StyledFormContainer>
            <StyledForm>
              <h1
                style={{
                  fontSize: "25px",
                  fontWeight: "600",
                  color: "#ffff",
                  marginBottom: "12px",
                  textAlign: "center",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontFamily: "Poppins, sans-serif",
                  borderBottom: "1px solid #ffff",
                }}
              >
                Datos de envio
              </h1>
              <input type="text" placeholder="Nombre" />
              <input type="text" placeholder="Apellido" />
              <input type="text" placeholder="Direccion" />
              <input type="text" placeholder="Ciudad" />
              <input type="text" placeholder="Telefono" />
              <input type="text" placeholder="Correo electronico" />
              <button
                style={{
                  backgroundColor: "#F2A154",
                  color: "#ffff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: "600",
                  fontFamily: "Poppins, sans-serif",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease-in-out",
                  marginTop: "20px",

                  "&:hover": {
                    backgroundColor: "#000",
                    color: "#ffff",
                    transition: "all 0.3s ease-in-out",
                    transform: "scale(1.05)",
                  },
                }}
              >
                Reservar
              </button>
            </StyledForm>
          </StyledFormContainer>
          <StyledCardOrderContainer>
            <h1
              style={{
                fontSize: "25px",
                fontWeight: "600",
                color: "#ffff",
                marginBottom: "12px",
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontFamily: "Poppins, sans-serif",
                borderBottom: "1px solid #ffff",
              }}
            >
              Productos a reservar
            </h1>
            {cartItems.length ? (
              cartItems.map((producto) => (
                <StyledCardOrder key={producto.id}>
                  <img src={producto.imagen} alt="" />
                  <h2>{producto.categoria.nombre}</h2>
                  <h3>Cantidad: {producto.quantity}</h3>
                  <h3>
                    Precio estimado: ${producto.precio * producto.quantity}
                  </h3>
                </StyledCardOrder>
              ))
            ) : (
              <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
                No hay productos en el carrito
              </h2>
            )}
          </StyledCardOrderContainer>
        </StyledCheckoutContainer>
        <Footer />
      </StyledHomeContainer>
    </>
  );
};

export default Checkout;
