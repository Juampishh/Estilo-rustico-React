import styled from "styled-components";

export const StyledContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("/img/header.jpg") no-repeat;
  background-size: cover;
  background-position: center;
`;

export const StyledForm = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
`;

export const StyledFormGroup = styled.div`
  margin-bottom: 15px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 3px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const StyledErrorMessage = styled.p`
  color: #dc3545;
  font-size: 14px;
  margin-top: 10px;
`;
