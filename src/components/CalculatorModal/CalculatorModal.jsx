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
    const totalMateriales = metrosCuadrados * unidadesPorMetroCuadrado;
    setCantidadMateriales(totalMateriales);
  };

  return (
    <>
      <StyledCalculatorModalContainer className="zoomIn">
        <StyledCalculatorModalTitle>
          Calculadora de materiales
        </StyledCalculatorModalTitle>
        <StyledCalculatorModalDescription>
          <p>Nombre del material: {selectedProduct.categoria.nombre}</p>
          <p>Cantidad : {selectedProduct.info.Cantidad}</p>
          <p>La venta se realiza por m²</p>
        </StyledCalculatorModalDescription>
        <StyledCalculatorModalForm>
          <label htmlFor="inputmetros">
            Ingrese la cantidad de m² que desee cubrir
          </label>
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
          <p>Cantidad de unidades necesarias: {cantidadMateriales}</p>
        )}
        <p>
          Precio estimado: $
          {(cantidadMateriales / selectedProduct.unidades) *
            selectedProduct.precio *
            0.75}{" "}
          con un descuento del 25%
        </p>
        <p style={{ fontSize: "15px" }}>
          Para realizar la compra del material debera añadir{" "}
          {cantidadMateriales / selectedProduct.unidades} unidades al carrito
        </p>
        <StyledCalculatorModalCloseButton>
          <IoCloseCircleOutline onClick={handleToggleModal} fontSize={"45px"} />
        </StyledCalculatorModalCloseButton>
      </StyledCalculatorModalContainer>
    </>
  );
};

export default CalculatorModal;
