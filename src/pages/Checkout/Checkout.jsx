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
import { useForm } from "react-hook-form";

import { useSelector } from "react-redux";
const Checkout = () => {
  const telefono = "543777382757";
  let totalCompra = 0;
  const { cartItems } = useSelector((state) => state.cart);
  const productos = cartItems.map((producto) => {
    totalCompra += producto.precio * producto.quantity;
    return producto.categoria.nombre + "-x" + producto.quantity;
  });

  const productosTexto = productos.join(", "); // Convertir la lista de productos a una cadena separada por comas
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const nombre = data.nombre;
    const apellido = data.apellido;
    const direccion = data.direccion;
    const ciudad = data.ciudad;
    const telefono = data.telefono;
    const email = data.email;
    const date = new Date().toLocaleDateString();

    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_Estilo Rustico_*%0A
		*Reservas*%0A%0A
		*Nombre y Apellido*%0A${
      nombre + " " + apellido
    }%0A*Fecha de tu reserva*%0A${date}%0A*Direccion de entrega*%0A${direccion}%0A*Provincia//Ciudad*%0A${ciudad}%0A*Numero de contacto*%0A${telefono}%0A*Email*%0A${email}%0A*Productos Seleccionados*%0A${productosTexto}.%0A*Valor total de la compra*%0A$${totalCompra}%0A
    `;
    window.open(url, "_blank");
  };

  return (
    <>
      <StyledHomeContainer>
        <Navbar />
        <StyledCheckoutContainer>
          <StyledTitleContainer>
            <h1>Checkout</h1>
          </StyledTitleContainer>
          <StyledFormContainer>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
              <input
                type="text"
                placeholder="Nombre"
                {...register("nombre", { required: true })}
              />
              {errors.nombre && (
                <p style={{ color: "red" }}>Este campo es requerido</p>
              )}
              <input
                type="text"
                placeholder="Apellido"
                {...register("apellido", { required: true })}
              />
              {errors.apellido && (
                <p style={{ color: "red" }}>Este campo es requerido</p>
              )}
              <input
                type="text"
                placeholder="Direccion"
                {...register("direccion", { required: true })}
              />
              {errors.direccion && (
                <p style={{ color: "red" }}>Este campo es requerido</p>
              )}
              <input
                type="text"
                placeholder="Ciudad"
                {...register("ciudad", { required: true })}
              />
              {errors.ciudad && (
                <p style={{ color: "red" }}>Este campo es requerido</p>
              )}
              <input
                type="text"
                placeholder="Telefono"
                {...register("telefono", {
                  required: true,
                })}
              />
              {errors.telefono && (
                <p style={{ color: "red" }}>
                  Este campo es requerido y no puede empezar con 0
                </p>
              )}
              <input
                type="text"
                placeholder="Correo electronico"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p style={{ color: "red" }}>Este campo es requerido</p>
              )}

              <button
                type="submit"
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
