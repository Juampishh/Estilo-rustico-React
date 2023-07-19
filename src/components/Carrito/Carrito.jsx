import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { IoMdRemove } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { toast } from "react-toastify";

import {
  StyledButtonComprar,
  StyledCarritoAddAndRemove,
  StyledCarritoCantidad,
  StyledCarritoClose,
  StyledCarritoContainer,
  StyledCarritoImagen,
  StyledCarritoInterfaz,
  StyledCarritoPrecioSubtotal,
  StyledCarritoPrecioTotal,
  StyledCarritoProductos,
  StyledCarritoProductosContainer,
} from "./StyledCarrito";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";

import { clearCart } from "../Redux/Cart/CartSlice";
import { addToCart } from "../Redux/Cart/CartSlice";
import { removeFromCart } from "../Redux/Cart/CartSlice";

const Carrito = () => {
  const [carritoVisible, setCarritoVisible] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const toggleCarrito = () => {
    setCarritoVisible((prevState) => !prevState);
  };
  const dispatch = useDispatch();
  const total = cartItems.reduce((acc, producto) => {
    return acc + producto.quantity;
  }, 0);
  const totalGeneral = cartItems.reduce((acc, producto) => {
    return acc + producto.quantity * producto.precio;
  }, 0);

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("¡El carrito ha sido vaciado!");
  };

  return (
    <>
      <StyledCarritoContainer>
        <AiOutlineShoppingCart onClick={toggleCarrito} />
        <span>{total}</span>
      </StyledCarritoContainer>
      {carritoVisible && (
        <StyledCarritoInterfaz className="zoomIn">
          <StyledCarritoClose>
            <h2 style={{ fontSize: "2rem" }}>Productos</h2>
            <h3 style={{ fontSize: "2rem", padding: "12px" }}>
              <BsFillTrashFill onClick={handleClearCart} />
            </h3>
            <h3>
              <AiOutlineClose onClick={toggleCarrito} />
            </h3>
          </StyledCarritoClose>

          <hr />

          {cartItems.length ? (
            cartItems.map((producto) => (
              <StyledCarritoProductosContainer key={producto.id}>
                <StyledCarritoProductos>
                  <StyledCarritoImagen>
                    <img src={producto.imagen} alt="" />
                  </StyledCarritoImagen>
                  <h2 style={{ marginTop: "1rem" }}>
                    {producto.categoria?.nombre}
                  </h2>{" "}
                  {/* Agregar el operador de opcionalidad '?' */}
                  <StyledCarritoPrecioSubtotal>
                    <h3>Subtotal</h3>
                    <span>${producto.precio * producto.quantity}</span>
                  </StyledCarritoPrecioSubtotal>
                  <StyledCarritoCantidad>
                    <h3>Cantidad</h3>
                    <span>{producto.quantity}</span>
                  </StyledCarritoCantidad>
                  <StyledCarritoAddAndRemove>
                    <IoMdRemove
                      onClick={() => dispatch(removeFromCart(producto.id))}
                      style={{
                        textAlign: "center",
                        fontSize: "2rem",
                        cursor: "pointer",
                      }}
                    />
                    <IoMdAdd
                      onClick={() => dispatch(addToCart(producto))}
                      style={{
                        textAlign: "center",
                        fontSize: "2rem",
                        cursor: "pointer",
                      }}
                    />
                  </StyledCarritoAddAndRemove>
                </StyledCarritoProductos>
              </StyledCarritoProductosContainer>
            ))
          ) : (
            <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
              No hay productos en el carrito
            </h2>
          )}
          <hr />
          <StyledCarritoPrecioTotal>
            <h2>Total:</h2>
            <span>${totalGeneral}</span>
          </StyledCarritoPrecioTotal>
          <StyledButtonComprar>
            <button>Comprar</button>
          </StyledButtonComprar>
        </StyledCarritoInterfaz>
      )}
    </>
  );
};

export default Carrito;
