import styled from "styled-components";
import { Link } from "react-router-dom";
import { Form as FormikForm } from "formik";
export const LoginContainerStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const Form = styled(FormikForm)`
  display: flex;
  height: 80%;
  background-color: #fff;
  position: relative;
  z-index: 2;
  border-radius: 10px;
  width: 50%;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
  @media (max-width: 768px) {
    width: 90%;
    margin-top: 40px;
    height: 90%;
    button {
      width: 100%;
    }
    button:hover {
      transform: scale(1.1);

      cursor: pointer;
    }
  }
`;

export const LoginEmailStyled = styled(Link)`
  & p {
    color: var(--orange);

    :hover {
      text-decoration: underline;
      transition: all 0.25s ease-out;
    }
  }
`;

export const Button = styled.button`
  width: 40%;
  color: #fff;
  font-size: 20px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: #000;
  cursor: pointer;
`;
