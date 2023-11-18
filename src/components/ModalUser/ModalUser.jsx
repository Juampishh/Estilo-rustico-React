import React from "react";
import { StyledModalContainer } from "./ModalStyled";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../Redux/User/userSlice";
import { toggleMenu } from "../Redux/User/userSlice";
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
          <AiOutlineClose
            onClick={() => dispatch(toggleMenu())}
            fontSize="40px"
            color="white"
            cursor="pointer"
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              color: "white",
              border: "1px solid white",
              borderRadius: "50%",
              backgroundColor: "#141516",
              padding: "3px",
            }}
          ></AiOutlineClose>
        </StyledModalContainer>
      )}
    </>
  );
};

export default ModalUser;
