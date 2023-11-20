import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  StyledButtonContainer,
  StyledCards,
  StyledCardsContainer,
  StyledImageCard,
  StyledPriceContainer,
  StyledTitleCategoriesContainer,
  StyledTittleContainer,
  StyledOverlay,
  StyledProductDetails,
  StyledProductImage,
  StyledProductPrice,
  StyledProductDiscount,
  StyledProductDescription,
  StyledAddToCartButton,
  StyledProductInfoContainer,
  StyledProductDescriptionContainer,
  StyledProductTitle,
  StyledProductPriceContainer,
  StyledMetodosDePagoContainer,
  StyledProductImageContainer,
} from "./StyledCards";
import { AiFillBank } from "react-icons/ai";
import { AiFillCreditCard } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";
import productos from "../../assets/Data/data";
import { GiBrickWall } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { BsFillTreeFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import { TiThSmallOutline } from "react-icons/ti";
import { IoIosCalculator } from "react-icons/io";
import {
  StyledTargetHero,
  StyledTargetHeroContainer,
} from "../Hero/StyledHero";
import Pagination from "../Pagination/Pagination";
import { addToCart } from "../Redux/Cart/CartSlice";
import CalculatorModal from "../CalculatorModal/CalculatorModal";
import { toggleModal } from "../Redux/Calculator/calculatorSlice";
import { selectModalHidden } from "../Redux/Calculator/calculatorSlice";
import { useSelector } from "react-redux";

const Cards = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const [animationClass, setAnimationClass] = useState("");

  const isModalHidden = useSelector(selectModalHidden);

  const handleToggleModal = () => {
    dispatch(toggleModal());
  };
  const handleCategoryClick = (category, card) => {
    setAnimationClass("fadeIn");
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleAnimationEnd = () => {
    setAnimationClass("");
  };
  const handleProductClose = () => {
    setSelectedProduct(null);
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const filteredProductos = selectedCategory
    ? productos.filter((producto) => producto.categoria.id === selectedCategory)
    : productos;

  const [productsPerPage, setProductsPerPage] = useState(8);
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  return (
    <>
      <StyledTargetHeroContainer>
        <h1>Categorias:</h1>
        <StyledTargetHero onClick={() => handleCategoryClick("")}>
          <TiThSmallOutline />
          <p>Todos</p>
        </StyledTargetHero>
        <StyledTargetHero onClick={() => handleCategoryClick("Jardin")}>
          <BsFillTreeFill />
          <p>Jardin</p>
        </StyledTargetHero>
        <StyledTargetHero onClick={() => handleCategoryClick("Atermicos")}>
          <FaTemperatureHigh />
          <p>Atermicos</p>
        </StyledTargetHero>
        <StyledTargetHero onClick={() => handleCategoryClick("Revestimientos")}>
          <GiBrickWall />
          <p>Pared</p>
        </StyledTargetHero>
        <StyledTargetHero onClick={() => handleCategoryClick("")}>
          <AiFillShopping />
          <p>Ofertas</p>
        </StyledTargetHero>
      </StyledTargetHeroContainer>
      <StyledCardsContainer>
        {filteredProductos.slice(firstIndex, lastIndex).map((card, index) => (
          <StyledCards
            className={`${animationClass}`}
            onAnimationEnd={handleAnimationEnd}
            key={index}
          >
            <StyledImageCard>
              <img
                src={card.imagen}
                alt={card.titulo}
                onClick={() => handleCardClick(card)}
              />
            </StyledImageCard>
            <StyledPriceContainer>
              <h3>${card.precio}</h3>
              <h5>${card.precio + card.precio * 0.25}</h5>
              <h1>25%</h1>
            </StyledPriceContainer>
            <StyledTittleContainer>
              <h2>{card.categoria.nombre}</h2>
            </StyledTittleContainer>

            <StyledButtonContainer>
              <StyledAddToCartButton
                style={{ width: "100%" }}
                onClick={() => {
                  dispatch(addToCart(card));
                  toast.success("Producto añadido al carrito", {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                }}
              >
                Añadir al carrito
              </StyledAddToCartButton>
            </StyledButtonContainer>
          </StyledCards>
        ))}
      </StyledCardsContainer>
      <Pagination
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        category={selectedCategory}
      />
      {selectedProduct && (
        <StyledOverlay>
          <StyledProductDetails className="zoomIn">
            <StyledProductImageContainer>
              <StyledProductImage
                src={selectedProduct.imagen}
                alt={selectedProduct.titulo}
              />
            </StyledProductImageContainer>

            <StyledProductInfoContainer>
              <StyledProductTitle>
                {selectedProduct.categoria.nombre}
              </StyledProductTitle>
              <StyledProductDescriptionContainer>
                <StyledProductDescription>
                  Tipo: {selectedProduct.info.tipo}
                </StyledProductDescription>
                <StyledProductDescription>
                  Material: {selectedProduct.info.Material}
                </StyledProductDescription>
                <StyledProductDescription>
                  Cantidad: {selectedProduct.info.Cantidad}
                </StyledProductDescription>

                <StyledProductDescription>
                  Precio: {selectedProduct.info.Precio}
                </StyledProductDescription>
                <StyledProductDescription>
                  Medida: {selectedProduct.info.Medida}
                </StyledProductDescription>
                <StyledProductDescription>
                  <p
                    style={{
                      cursor: "pointer",
                      color: "blue",
                    }}
                    onClick={handleToggleModal}
                  >
                    Calcular cantidad de material
                  </p>
                </StyledProductDescription>
                <StyledProductPriceContainer>
                  <h2>
                    Precio con descuento: $
                    {selectedProduct.precio +
                      selectedProduct.precio * 0.25 -
                      selectedProduct.precio * 0.25}
                  </h2>
                </StyledProductPriceContainer>
                <StyledMetodosDePagoContainer>
                  <p>Medios de pago:</p>
                  <AiFillCreditCard cursor="pointer" fontSize="50px" />
                  <FaMoneyBillAlt cursor="pointer" fontSize="50px" />
                  <AiFillBank cursor="pointer" fontSize="50px" />
                </StyledMetodosDePagoContainer>
              </StyledProductDescriptionContainer>
              <StyledButtonContainer>
                <StyledAddToCartButton
                  onClick={() => {
                    dispatch(addToCart(selectedProduct));
                    toast.success("Producto añadido al carrito", {
                      position: toast.POSITION.TOP_RIGHT,
                    });
                  }}
                  style={{ position: "absolute" }}
                >
                  Añadir al carrito
                </StyledAddToCartButton>
              </StyledButtonContainer>
            </StyledProductInfoContainer>
          </StyledProductDetails>

          <AiOutlineClose
            className="zoomIn"
            fontSize="60px"
            color="white"
            cursor="pointer"
            onClick={handleProductClose}
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              color: "white",
              border: "1px solid white",
              borderRadius: "50%",
              backgroundColor: "#141516",
              padding: "3px",
            }}
          ></AiOutlineClose>
          {isModalHidden && (
            <CalculatorModal selectedProduct={selectedProduct} />
          )}
        </StyledOverlay>
      )}
      <ToastContainer />
    </>
  );
};

export default Cards;
