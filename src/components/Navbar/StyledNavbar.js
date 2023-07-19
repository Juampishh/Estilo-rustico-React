import styled from "styled-components";
export const StyledNavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;

  z-index: 100;

  gap: 20px;
  padding: 20px;
  justify-content: space-around;
  background-color: #000;
  h1 {
    color: #fff;
    font-size: 2rem;
  }
  li {
    list-style: none;
    color: #fff;
    font-size: 1.5rem;
  }
`;
export const StyledSocialContainer = styled.div`
  width: 50%;
  padding: 0 20px;
  display: flex;

  gap: 3rem;

  li {
    list-style: none;
    font-size: 1.7rem;
    letter-spacing: 2px;
    &:hover {
      transform: scale(1.1);
      text-decoration: underline;
      cursor: pointer;
    }
  }
  li a {
    text-decoration: none;
    color: #fff;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
    li {
      display: none;
    }
  }
`;

export const StyledCartContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  @media (max-width: 768px) {
  }
`;
