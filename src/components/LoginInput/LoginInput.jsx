import React from "react";
import { InputContainer, LoginInputStyled } from "./LoginInputStyled";
import { ErrorMessage, Field } from "formik";

const LoginInput = ({ name, type, placeholder }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputContainer>
          <LoginInputStyled
            type={type}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />
          <ErrorMessage name={field.name}>
            {(msg) => (
              <p style={{ fontSize: "10px", textAlign: "center" }}>{msg}</p>
            )}
          </ErrorMessage>
        </InputContainer>
      )}
    </Field>
  );
};
export default LoginInput;
