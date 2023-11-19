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
  background-image: url("../public/img/fondo-orders.jfif");
`;
export const StyledTitleContainer = styled.div`
  border-bottom: 1px solid #fff;

  text-align: center;
  h1 {
    font-size: 2rem;
    color: #fff;
  }
`;

export const StyledCardOrderContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledCardOrder = styled.div`
  width: 33%;
  height: 400px;
  background-color: #fff;
  border-radius: 5px;

  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
  p {
    font-size: 1.2rem;
  }
`;
