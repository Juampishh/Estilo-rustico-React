import styled from "styled-components";

export const StyledCalculatorModalContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ddcbbe;
  position: absolute;
  border: 1px solid #000;
  box-shadow: 0 0 10px #000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 100;

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 500px;
  }
`;

export const StyledCalculatorModalTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
  border-bottom: 1px solid #000;
  color: #000;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const StyledCalculatorModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #000;
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;

    &:focus {
      border: 1px solid #000;
    }
  }

  label {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

export const StyledCalculatorModalButton = styled.button`
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

export const StyledCalculatorModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #000;

  &:hover {
    color: #fff;
  }
`;

export const StyledCalculatorModalDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.2rem;
    text-align: center;
    margin: 0;
    margin-bottom: 10px;
  }
  span {
    font-size: 1.2rem;
    text-align: center;
    margin: 0;
    margin-bottom: 10px;
    font-weight: bold;
  }
`;
