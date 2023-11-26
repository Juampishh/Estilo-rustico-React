import React from "react";
import { motion } from "framer-motion";
import { StyledModalContainer } from "./ModalStyled";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../Redux/User/userSlice";
import { toggleMenu } from "../Redux/User/userSlice";
import { useNavigate } from "react-router-dom";

const ModalUser = () => {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      {currentUser.hiddenMenu && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <StyledModalContainer>
            <hr />
            <h1>Bienvenido {currentUser.currentUser.nombre}</h1>
            <hr />
            <p>Perfil</p>
            <p
              onClick={() => {
                navigate("/orders");
                dispatch(toggleMenu());
              }}
            >
              Mis ordenes
            </p>
            <p
              onClick={() => {
                navigate("/");
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
        </motion.div>
      )}
    </>
  );
};

export default ModalUser;
