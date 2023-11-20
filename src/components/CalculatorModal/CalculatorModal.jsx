import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  StyledCalculatorModalButton,
  StyledCalculatorModalCloseButton,
  StyledCalculatorModalContainer,
  StyledCalculatorModalDescription,
  StyledCalculatorModalForm,
  StyledCalculatorModalTitle,
} from "./StyledCalculatorModal";
import {
  toggleModal,
  selectModalHidden,
} from "../Redux/Calculator/calculatorSlice";
import { useSelector } from "react-redux";

const CalculatorModal = ({ selectedProduct }) => {
  const [metrosCuadrados, setMetrosCuadrados] = useState("");
  const [cantidadMateriales, setCantidadMateriales] = useState(null);

  const dispatch = useDispatch();

  const isModalHidden = useSelector(selectModalHidden);

  const handleToggleModal = () => {
    dispatch(toggleModal());
  };
  const handleInputChange = (event) => {
    setMetrosCuadrados(event.target.value);
  };

  const handleCalculate = (event) => {
    event.preventDefault();
    if (!metrosCuadrados || isNaN(metrosCuadrados)) {
      return;
    }

    const unidadesPorMetroCuadrado = selectedProduct.unidades;
    const totalMateriales = Math.round(
      metrosCuadrados * unidadesPorMetroCuadrado
    );
    setCantidadMateriales(totalMateriales);
  };

  return (
    <>
      <StyledCalculatorModalContainer className="zoomIn">
        <StyledCalculatorModalTitle>
          Calculadora de materiales
        </StyledCalculatorModalTitle>

        <StyledCalculatorModalDescription>
          <p>
            Nombre del material: <span>{selectedProduct.categoria.nombre}</span>{" "}
          </p>
          <p>
            Cantidad : <span>{selectedProduct.info.Cantidad}</span>{" "}
          </p>
          <span>La venta se realiza por m²</span>
        </StyledCalculatorModalDescription>
        <StyledCalculatorModalForm>
          <p>Ingrese la cantidad de m² que desee cubrir</p>

          <input
            id="inputmetros"
            type="number"
            value={metrosCuadrados}
            onChange={handleInputChange}
          />
          <StyledCalculatorModalButton onClick={handleCalculate}>
            Calcular
          </StyledCalculatorModalButton>
        </StyledCalculatorModalForm>
        {cantidadMateriales !== null && (
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
              margin: "2px",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          >
            Cantidad de unidades necesarias: {cantidadMateriales}
          </p>
        )}
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            margin: "2px",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          Precio estimado: $
          {Math.round(
            (cantidadMateriales / selectedProduct.unidades) *
              selectedProduct.precio *
              0.75
          )}{" "}
          con un descuento del 25%
        </p>
        <p
          style={{
            fontSize: "15px",
            textAlign: "center",
            fontWeight: "bold",
            margin: "2px",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          Para realizar la compra del material debera añadir{" "}
          <span>
            {Math.round(cantidadMateriales / selectedProduct.unidades)}
          </span>{" "}
          unidades al carrito
        </p>
        <StyledCalculatorModalCloseButton>
          <IoCloseCircleOutline onClick={handleToggleModal} fontSize={"45px"} />
        </StyledCalculatorModalCloseButton>
      </StyledCalculatorModalContainer>
    </>
  );
};

export default CalculatorModal;
