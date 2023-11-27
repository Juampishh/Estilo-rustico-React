import styled from "styled-components";

export const StyledCheckoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-image: url("img/fondo-orders.jpg");
  object-fit: cover;
  background-size: cover;
  @media (max-width: 768px) {
    height: 100%;
    flex-direction: column;
  }
`;

export const StyledTitleContainer = styled.div`
  width: 30%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  text-align: center;
  position: absolute;
  top: 115px;
  left: 35%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  h1 {
    font-size: 2rem;
    color: #fff;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    width: 70%;
    display: none;
    left: 15%;
  }
`;

export const StyledFormContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const StyledForm = styled.form`
  width: 90%;
  height: 60%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  flex-direction: column;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  input {
    background-color: rgba(210, 210, 180, 0.8);
    width: 30%;
    height: 40px;
    border-radius: 10px;
    border: none;
    margin: 10px 0;
    padding: 0 10px;
    font-size: 1.2rem;
    outline: none;

    @media (max-width: 768px) {
      width: 100%;
    }
    &:hover {
      transform: scale(1.02);
    }
  }
  h1 {
    color: #fff;
    font-size: 1.2rem;
    margin: 10px 0;
  }
  button {
    width: 30%;
    height: 40px;
    border-radius: 10px;
    border: none;
    margin: 10px 0;
    padding: 0 10px;
    font-size: 1.2rem;
    outline: none;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
`;
export const StyledCardOrderContainer = styled.div`
  width: 30%;
  height: 70%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  align-items: center;
  overflow-y: scroll;
  position: relative;
  gap: 30px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const StyledCardOrder = styled.div`
  width: 300px;
  height: 400px;
  background-color: rgba(210, 210, 180, 0.6);
  color: #fff;
  font-weight: 500;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
  h1 {
    color: #fff;
    font-size: 1.2rem;
    margin: 10px 0;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
  }
  h2 {
    color: #fff;
    font-size: 1.2rem;
    margin: 10px 0;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
  }
  h3 {
  }

  p {
    color: #fff;
    font-size: 1.2rem;
  }
  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
