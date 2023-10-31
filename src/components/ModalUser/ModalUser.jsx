import React from "react";
import { StyledModalContainer } from "./ModalStyled";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "../Redux/User/userSlice";
const ModalUser = () => {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      {currentUser.hiddenMenu && (
        <StyledModalContainer>
          <hr />
          <h1>Bienvenido {currentUser.currentUser.nombre}</h1>
          <hr />
          <p>Perfil</p>
          <p>Mis ordenes</p>
          <p
            onClick={() => {
              dispatch(setCurrentUser(null));
              dispatch(currentUser.toggleMenu);
            }}
          >
            Cerrar Sesion
          </p>
        </StyledModalContainer>
      )}
    </>
  );
};

export default ModalUser;
