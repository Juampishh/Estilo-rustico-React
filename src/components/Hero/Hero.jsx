import React, { useState } from "react";
import {
  StyledCard,
  StyledCardList,
  StyledCardListContainer,
  StyledHeroContainer,
  StyledHeroContentContainer,
  StyledImageContainer,
  StyledInformationExtra,
} from "./StyledHero";
import { IoLocationSharp } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";
import { GiShop } from "react-icons/gi";
import Carrito from "../Carrito/Carrito";

const Hero = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (cardId) => {
    if (selectedCard === cardId) {
      setSelectedCard(null);
    } else {
      setSelectedCard(cardId);
    }
  };

  return (
    <StyledHeroContainer>
      <StyledImageContainer>
        <img src="/img/header.jpg" alt="hero" />
      </StyledImageContainer>

      <StyledHeroContentContainer>
        <h1 className="title-prin">Fabrica de revestimientos</h1>
      </StyledHeroContentContainer>

      <StyledCardListContainer>
        <StyledCard onClick={() => handleClick(1)}>
          <StyledCardList>
            <FaCreditCard />
            <h2>Tarjetas</h2>
          </StyledCardList>

          {selectedCard === 1 && (
            <StyledInformationExtra>
              <p>Aceptamos tarjetas de credito y debito</p>
            </StyledInformationExtra>
          )}
        </StyledCard>

        <StyledCard onClick={() => handleClick(2)}>
          <StyledCardList>
            <FaTruckMoving />
            <h2>Envios</h2>
          </StyledCardList>

          {selectedCard === 2 && (
            <StyledInformationExtra>
              <p>Envios a todo corrientes capital</p>
            </StyledInformationExtra>
          )}
        </StyledCard>

        <StyledCard onClick={() => handleClick(3)}>
          <StyledCardList>
            <GiShop />
            <h2>Retiro</h2>
          </StyledCardList>

          {selectedCard === 3 && (
            <StyledInformationExtra>
              <p>Retiro por sucursal</p>
            </StyledInformationExtra>
          )}
        </StyledCard>

        <StyledCard onClick={() => handleClick(4)}>
          <StyledCardList>
            <IoLocationSharp />
            <h2>Corrientes</h2>
          </StyledCardList>

          {selectedCard === 4 && (
            <StyledInformationExtra>
              <p>Estamos en corrientes capital</p>
            </StyledInformationExtra>
          )}
        </StyledCard>
      </StyledCardListContainer>
    </StyledHeroContainer>
  );
};

export default Hero;
