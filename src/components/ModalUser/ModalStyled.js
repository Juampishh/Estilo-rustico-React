import styled from "styled-components";

export const StyledModalContainer = styled.div`
  width: 30%;
  height: 50vh;
  background-color: rgba(0, 0, 0, 0.5);
  border-bottom-right-radius: 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: #fff;
    text-align: center;
  }
  p {
    font-size: 1.3rem;
    color: #fff;
    text-align: center;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  p:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    margin-top: 100px;
    width: 50%;
    height: 50vh;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
