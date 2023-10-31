import React from "react";
import { StyledHomeContainer } from "../Home/StyledHome";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { StyledLoginBox, StyledLoginContainer } from "./StyledLogin";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import { Form } from "../Register/RegisterStyles";
import LoginInput from "../../components/LoginInput/LoginInput";
import { Button } from "../Register/RegisterStyles";
import { loginInitialValues } from "../../formik/initialValues";
import { loginValidationSchema } from "../../formik/validationSchema";
import { loginUser } from "../../axios/axiosUser";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../components/Redux/User/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  return (
    <StyledHomeContainer>
      <Navbar />
      <StyledLoginContainer>
        <img src="./public/img/header.jpg" alt="" />

        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={async (values, actions) => {
            const user = await loginUser(values.email, values.password);

            if (user) {
              dispatch(
                setCurrentUser({
                  ...user.user,
                  token: user.token,
                })
              );

              actions.resetForm();
            }
          }}
        >
          <Form>
            <h1>Iniciar Sesion</h1>

            <LoginInput name="email" type="text" placeholder="Email" />
            <LoginInput
              name="password"
              type="password"
              placeholder="Contraseña"
            />
            <Button type="submit">Iniciar Sesion</Button>
            <p>
              ¿No tienes una cuenta?{" "}
              <NavLink to="/register">Registrarse</NavLink>
            </p>
          </Form>
        </Formik>
      </StyledLoginContainer>
      <Footer />
    </StyledHomeContainer>
  );
};

export default Login;
