import styled from "styled-components";
export const StyledCarritoContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  gap: 1rem;

  align-items: center;
  font-size: 2.5rem;
  cursor: pointer;
  color: #fff;
  @media (max-width: 768px) {
  }
`;

export const StyledCarritoInterfaz = styled.div`
  width: 40%;
  padding: 1rem;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  z-index: 100;
  top: 100px;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const StyledCarritoClose = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
export const StyledCarritoProductosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  color: #fff;
`;
export const StyledCarritoProductos = styled.div`
  width: 100%;
  padding: 1rem;
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-color: #ccc;
  border-radius: 5px;
  gap: 1rem;
  color: #000;
`;
export const StyledCarritoImagen = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

export const StyledCarritoCantidad = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledCarritoPrecioTotal = styled.div`
  display: flex;
  gap: 0.4rem;

  justify-content: center;
  align-items: center;
  h2 {
    font-size: 1.5rem;
  }
  span {
    font-size: 1.5rem;
  }
`;
export const StyledButtonComprar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    width: 50%;
    height: 50px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
  }
  &hover {
    transform: scale(1.1);
  }
`;

export const StyledCarritoAddAndRemove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const StyledCarritoPrecioSubtotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;
