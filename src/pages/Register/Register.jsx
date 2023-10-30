import React from "react";
import { StyledHomeContainer } from "../Home/StyledHome";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Formik } from "formik";
import { StyledLoginContainer, SubmitButton } from "../Login/StyledLogin";

import { Form } from "../Login/StyledLogin";
import { registerInitialValues } from "../../formik/initialValues";
import { registerValidationSchema } from "../../formik/validationSchema";
import LoginInput from "../../components/LoginInput/LoginInput";
const Register = () => {
  return (
    <StyledHomeContainer>
      <Navbar />
      <StyledLoginContainer>
        <img src="./public/img/header.jpg" alt="" />

        <Formik
          initialValues={registerInitialValues}
          validationSchema={registerValidationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
            <h2>Crea tu cuenta</h2>
            <LoginInput name="name" type="text" placeholder="Nombre" />
            <LoginInput name="email" type="text" placeholder="Email" />
            <LoginInput
              name="password"
              type="password"
              placeholder="Contraseña"
            />
            <SubmitButton type="button">Registrate</SubmitButton>
          </Form>
        </Formik>
      </StyledLoginContainer>
      <Footer />
    </StyledHomeContainer>
  );
};

export default Register;
