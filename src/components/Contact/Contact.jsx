import React from "react";
import {
  StyledContactContainer,
  StyledForm,
  StyledFormGroup,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledButton,
} from "./StyledContact";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
  };

  return (
    <StyledContactContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormGroup>
          <StyledLabel htmlFor="nombre">Nombre</StyledLabel>
          <StyledInput type="text" id="nombre" />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel htmlFor="apellido">Apellido</StyledLabel>
          <StyledInput type="text" id="apellido" />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput type="email" id="email" />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel htmlFor="telefono">Teléfono</StyledLabel>
          <StyledInput type="tel" id="telefono" />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledLabel htmlFor="mensaje">Mensaje</StyledLabel>
          <StyledTextarea id="mensaje" rows="4" />
        </StyledFormGroup>
        <StyledButton type="submit">Enviar</StyledButton>
      </StyledForm>
    </StyledContactContainer>
  );
};

export default Contact;
