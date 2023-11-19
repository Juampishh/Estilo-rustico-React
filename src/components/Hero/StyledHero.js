import styled from "styled-components";

export const StyledImageContainer = styled.div`
  width: 100%;

  img {
    object-fit: cover;
    width: 100%;
    height: 90vh;
  }
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 10;
`;
export const StyledHeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ccc;
  gap: 2rem;
`;

export const StyledHeroContentContainer = styled.div`
  width: 100%;
  font-size: 3.5rem;
  position: absolute;
  z-index: 10;
  display: flex;
  background-color: transparent;
  color: #f5f5f5;
  h1 {
    padding: 0 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  justify-content: center;
  top: 200px;

  @media (max-width: 1350px) {
    h1 {
      font-size: 2.9rem;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const StyledTargetHeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 3rem;
  position: relative;
  z-index: 10;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    h1 {
      width: 100%;
      text-align: center;
    }
    flex-wrap: wrap;
  }
`;

export const StyledTargetHero = styled.div`
  width: 95px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 95px;
  background-color: #fff;
  border-radius: 50%;
  font-size: 2rem;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    transition: 0.5s;
  }
  p {
    font-size: 0.8rem;
  }
`;

export const StyledCardListContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 10;
  top: 100px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 375px) {
    gap: 1.2rem;
  }
`;
export const StyledCard = styled.div`
  width: 15%;
  height: 75px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 3.5rem;
  background-color: #fff;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  h2 {
    font-size: 1.5rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 375px) {
    height: 50px;
  }
`;
export const StyledCardList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 3.5rem;
  gap: 1rem;
`;
export const StyledInformationExtra = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  border-radius: 10px;
  p {
    font-size: 0.8rem;
  }
`;
