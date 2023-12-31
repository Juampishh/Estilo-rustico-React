import styled from "styled-components";
export const StyledLoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 100px 0;
  background-color: #f5f5f5;
  display: flex;

  justify-content: center;
  align-items: center;

  h1 {
    font-size: 40px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    position: absolute;
    z-index: 0;
  }
`;

export const StyledLoginBox = styled.form`
  width: 500px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  position: absolute;
  z-index: 2;
  gap: 20px;
  input {
    width: 80%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    padding: 0 10px;
  }
  label {
    font-size: 20px;
  }
  button {
    width: 80%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    padding: 0 10px;
    background-color: #000;
    color: #fff;
    font-size: 20px;
  }
  button:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
