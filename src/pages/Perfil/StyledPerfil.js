import styled from "styled-components";

export const StyledPerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-image: url("img/header-perfil.jpg");
  background-size: cover;
  h1 {
    color: white;
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    margin-top: 100px;
  }
`;

export const StyledPerfilCard = styled.div`
  width: 50%;
  height: 55%;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  color: white;
  box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.7);
  padding: 1rem;
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 1rem;

  h2 {
    font-size: 2rem;
    margin: 0 auto;
    border-bottom: 1px solid white;
    border-top: 1px solid white;
    padding: 0.5rem;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  p {
    margin: 0 auto;
    font-size: 1.5rem;
  }
  p:hover {
    color: #f2a900;
    transform: scale(1.02);
    cursor: pointer;
  }
  img {
    width: 200px;
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.5);
    border-radius: 50%;
  }
  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
    flex-direction: column;
    justify-content: space-around;
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
    img {
      width: 100px;
    }
  }
`;

export const StyledPerfilInformationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 90%;
  border: 1px solid white;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.7);
  gap: 1rem;
  h1 {
    font-size: 2rem;
    margin: 0 auto;
    border-bottom: 1px solid white;
    border-top: 1px solid white;
    padding: 0.5rem;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    h1 {
      display: none;
    }
  }
`;

export const StyledPerfilImageContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img:hover {
    transform: scale(1.08);
    cursor: pointer;
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.8);
    transition: 0.5s ease-in-out;
  }
`;
