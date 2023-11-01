import styled from "styled-components";
export const StyledNavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  position: fixed;
  z-index: 100;

  gap: 20px;
  padding: 20px;
  justify-content: space-around;
  background-color: #000;
  h1 {
    color: #fff;
    font-size: 1.5rem;
  }
  li {
    list-style: none;
    color: #fff;
    font-size: 1.5rem;
  }
`;
export const StyledSocialContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;

  gap: 3rem;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    font-size: 1.4rem;
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
  align-items: center;
  gap: 40px;
  width: 100%;
  justify-content: flex-end;
  figure {
    color: #fff;
    font-size: 1.5rem;
    display: none;
  }
  @media (max-width: 768px) {
    justify-content: space-around;
    figure {
      margin-top: 10px;
      font-size: 1.7rem;
      display: block;
      cursor: pointer;
    }
  }
`;
