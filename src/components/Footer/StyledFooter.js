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
  }
`;

export const StyledLinksFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.7rem;
  h3 {
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
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
