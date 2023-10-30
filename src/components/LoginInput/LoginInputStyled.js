import styled from "styled-components";

export const InputContainer = styled.div`
  width: 80%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
  position: relative;
  z-index: 2;
`;
export const LoginInputStyled = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;
