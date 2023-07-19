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
import { GiBrickWall, GiPositionMarker } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { BsFillTreeFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
import { TiThSmallOutline } from "react-icons/ti";
import {
  StyledTargetHero,
  StyledTargetHeroContainer,
} from "../Hero/StyledHero";
import Pagination from "../Pagination/Pagination";
import { addToCart } from "../Redux/Cart/CartSlice";

const Cards = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryClick = (category, card) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleProductClose = () => {
    setSelectedProduct(null);
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, cantidad: 1 },
      ]);
    }
  };

  console.log(cartItems);

  const filteredProductos = selectedCategory
    ? productos.filter((producto) => producto.categoria.id === selectedCategory)
    : productos;

  const [productsPerPage, setProductsPerPage] = useState(8);
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const dispatch = useDispatch();
  const notify = () => toast("Se añadio al carrito con exito");
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
          <StyledCards className="zoomIn" key={index}>
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
              <StyledAddToCartButton onClick={() => dispatch(addToCart(card))}>
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
              <ToastContainer />
              <StyledButtonContainer onClick={notify}>
                <StyledAddToCartButton
                  onClick={() => dispatch(addToCart(selectedProduct))}
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
              color: "black",
            }}
          ></AiOutlineClose>
        </StyledOverlay>
      )}
    </>
  );
};

export default Cards;
