import styled from "styled-components";

export const StyledSobreNosContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("img/fondo-orders.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;

  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledSobreNosInformationContainer = styled.div`
  width: 80%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  padding: 2rem;
  gap: 2rem;

  align-items: center;
  border-radius: 1rem;
  justify-content: center;

  h1 {
    color: #fff;
    font-size: 4rem;
    position: absolute;
    top: 110px;
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 800px) and (max-width: 1700px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    overflow-y: scroll;
    flex-direction: column;
    margin-top: 2rem;
    width: 100%;
    h1 {
      display: none;
    }
  }
`;

export const StyledCardSobreNos = styled.div`
  width: 50%;

  height: 50%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 10px #fff;
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
    cursor: pointer;
  }

  h2 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  p {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    position: relative;
    top: 210px;
    margin-bottom: 2rem;

    h2 {
      text-align: center;
      font-size: 1.5rem;
    }
    p {
      text-align: center;
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 375px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

export const StyledSobreNosButtonContainer = styled.div`
  position: absolute;
  bottom: 130px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 200px;
    height: 50px;
    border-radius: 1rem;
    border: none;
    background-color: #fff;
    color: #000;
    font-size: 1.5rem;
    font-weight: bold;
    &:hover {
      background-color: #000;
      color: #fff;
      transition: all 0.2s ease-in-out;
      transform: scale(0.9);
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    bottom: 50px;
  }
`;
