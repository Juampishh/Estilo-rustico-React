import styled from "styled-components";

export const StyledOrdersContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-image: url("../public/img/fondo-orders.jpg");
  object-fit: cover;
  background-size: cover;
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
`;

export const StyledCardOrderContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledCardOrder = styled.div`
  width: 400px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-weight: 500;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  &:hover {
    transform: scale(1.02);
  }
  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 5px;
  }
  p {
    font-size: 1.2rem;
  }
  p:hover {
    color: #e8caba;
    cursor: pointer;
    transform: scale(1.02);
  }
  span {
    padding: 5px;
    font-size: 1.2rem;

    color: yellow;
  }
  h1 {
    font-size: 1.5rem;
    color: #fff;
    font-weight: 700;
    text-align: center;
    border-bottom: 1px solid #e8caba;
    border-top: 1px solid #e8caba;
  }
`;
