import styled from "styled-components";

export const StyledFooterContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ccc;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-top: 2px solid #000;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
  position: relative;
  z-index: 2;
`;

export const StyledLinksFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.7rem;
  a {
    font-size: 1rem;
  }
  h1 {
    font-size: 1.7rem;
    border-bottom: 2px solid #000;
  }
  h3 {
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    h1 {
      margin-top: -2rem;
      font-size: 2rem;
      border-bottom: 2px solid #000;
    }
    a {
      color: #000;
      font-size: 1.5rem;
      cursor: pointer;
    }
    a:hover {
      transform: scale(1.1);
    }
  }
`;

export const StyledFooterHeading = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const StyledFooterLink = styled.a`
  text-decoration: none;
  color: #000;
  margin-bottom: 0.3rem;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
