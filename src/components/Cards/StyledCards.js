import styled from "styled-components";

export const StyledCardsContainer = styled.div`
  width: 100%;

  background-color: #ccc;

  padding-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding-bottom: 50px;
`;

export const StyledCards = styled.div`
  width: 350px;
  background-color: #ffffff;
  height: 550px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    &:hover {
      transform: scale(1);
    }
  }
`;

export const StyledImageCard = styled.div`
  width: 100%;
  height: 60%;
  background-color: #000;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const StyledPriceContainer = styled.div`
  width: 100%;
  display: flex;

  gap: 15px;
  padding: 25px;

  h3 {
    font-size: 2rem;
  }

  h5 {
    text-decoration: line-through;
    color: gray;
    margin-top: 10px;
    font-size: 0.9rem;
  }
  h1 {
    padding: 5px;
    text-align: center;
    font-size: 1.5rem;
    border: 2px solid #e0e0cc;
    border-radius: 5px;
    background-color: #e0e0cc;
    color: #000;
    margin-left: auto;
  }
`;

export const StyledTittleContainer = styled.div`
  width: 100%;
  font-size: 1.3rem;
  padding: 0 25px;
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: center;
`;

export const StyledTitleCategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ccc;

  h1 {
    border-bottom: 2px solid #000;
    font-size: 3rem;
    letter-spacing: 5px;
  }
`;
export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const StyledProductDetails = styled.div`
  background-color: white;
  display: flex;

  padding: 20px;
  border-radius: 5px;
  width: 70%;
  height: 80%;
  text-align: center;
  @media only screen and (min-width: 800px) and (max-width: 1200px) {
    width: 80%;
    height: 80%;
    flex-direction: column;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1409px) {
    width: 95%;
  }
  @media (max-width: 768px) {
    padding: 0 20px;
    width: 95%;
    height: 95%;
    flex-direction: column;
  }
  @media (max-width: 375px) {
    padding: 0 20px;
    width: 95%;
    height: 95%;
    flex-direction: column;
  }
`;
export const StyledProductImageContainer = styled.div`
  width: 100%;
  height: 100%;
  @media only screen and (min-width: 800px) and (max-width: 1200px) {
    width: 100%;
    height: 40%;
  }
`;
export const StyledProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 100%;
    height: 420px;
    margin-top: 20px;
  }
  @media (max-width: 375px) {
    width: 100%;
    height: 250px;
    margin-top: 20px;
  }
`;
export const StyledProductInfoContainer = styled.div`
  width: 90%;
  height: 70%;
  margin-left: 20px;
  text-align: left;
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const StyledProductTitle = styled.h1`
  padding: 20px;
  font-weight: bold;
  text-decoration: underline;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 0;
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 800px) and (max-width: 1200px) {
    font-size: 34px;
    margin-bottom: 0px;
  }
`;
export const StyledProductPriceContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0;
  border-top: 2px solid #000;
  text-align: center;
  h2 {
    text-align: left;
    font-size: 34px;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 800px) and (max-width: 1200px) {
    h2 {
      display: none;
    }
  }
`;
export const StyledProductPrice = styled.p`
  font-weight: bold;
  font-size: 34px;
  text-decoration: line-through;
  color: gray;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledProductDiscount = styled.p`
  font-size: 34px;
  background-color: #f5a623;
  text-align: center;
  border-radius: 5px;

  width: 100px;
  color: red;
`;
export const StyledProductDescriptionContainer = styled.div`
  width: 100%;
  padding: 20px;
  gap: 7px;
  display: flex;
  flex-direction: column;

  height: 100%;
  @media (max-width: 768px) {
    margin-bottom: 60px;
    padding: 0;
  }
`;
export const StyledProductDescription = styled.p`
  display: flex;
  font-size: 23px;

  &:before {
    content: "•";
    margin-right: 10px;
  }
  @media (max-width: 768px) {
    font-size: 17px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 800px) and (max-width: 1200px) {
    font-size: 30px;
    margin: 0;
  }
`;

export const StyledAddToCartButton = styled.button`
  background-color: #f5a623;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  cursor: pointer;

  @media (max-width: 768px) {
    bottom: 0px;
    left: 0;
  }
  @media only screen and (min-width: 800px) and (max-width: 1200px) {
    bottom: 0px;
    left: 0;
  }
  @media (min-width: 1205px) {
    width: 30%;
  }
  &:hover {
    background-color: gray;
    transform: scale(0.9);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    color: black;
  }
`;
export const StyledAddToCartButtonContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const StyledMetodosDePagoContainer = styled.div`
  display: flex;
  width: 100%;

  gap: 20px;
  p {
    font-size: 25px;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 800px) and (max-width: 1200px) {
    display: none;
  }
`;
