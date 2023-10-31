import React from "react";
import { StyledHomeContainer } from "../Home/StyledHome";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Formik } from "formik";
import { StyledLoginContainer } from "../Login/StyledLogin";

import { Form } from "./RegisterStyles";
import { registerInitialValues } from "../../formik/initialValues";
import { registerValidationSchema } from "../../formik/validationSchema";
import LoginInput from "../../components/LoginInput/LoginInput";
import { Button } from "./RegisterStyles";
import { createUser } from "../../axios/axiosUser";
import { NavLink, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  return (
    <StyledHomeContainer>
      <Navbar />
      <StyledLoginContainer>
        <img src="./public/img/header.jpg" alt="" />

        <Formik
          initialValues={registerInitialValues}
          validationSchema={registerValidationSchema}
          onSubmit={async (values, actions) => {
            const user = await createUser(
              values.name,
              values.email,
              values.password
            );
            actions.resetForm();
            if (user) {
              navigate("/login");
            }
          }}
        >
          <Form>
            <h1>Crea tu cuenta</h1>
            <LoginInput name="name" type="text" placeholder="Nombre" />
            <LoginInput name="email" type="text" placeholder="Email" />
            <LoginInput
              name="password"
              type="password"
              placeholder="Contraseña"
            />
            <Button type="submit">Registrarse</Button>
            <p>
              ¿Ya tienes cuenta? <NavLink to="/login">Iniciar sesion</NavLink>
            </p>
          </Form>
        </Formik>
      </StyledLoginContainer>
      <Footer />
    </StyledHomeContainer>
  );
};

export default Register;
