import React from "react";
import productos from "../../assets/Data/data";

const Pagination = ({
  productsPerPage,
  currentPage,
  setCurrentPage,
  category,
}) => {
  const pageNumber = Math.ceil(productos.length / productsPerPage);
  const pageNumberJardin = Math.ceil(
    productos.filter((producto) => producto.categoria.id === "Jardin").length /
      8
  );

  const pageNumberAtermicos = Math.ceil(
    productos.filter((producto) => producto.categoria.id === "Atermicos")
      .length / 8
  );
  const pageNumberRevestimientos = Math.ceil(
    productos.filter((producto) => producto.categoria.id === "Revestimientos")
      .length / 8
  );

  const handlePageNumber = (category) => {
    if (category === "Jardin") {
      return pageNumberJardin;
    } else if (category === "Atermicos") {
      return pageNumberAtermicos;
    } else if (category === "Revestimientos") {
      return pageNumberRevestimientos;
    } else {
      return Math.ceil(productos.length / 8);
    }
  };
  const onPreviusPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextPage = () => {
    if (currentPage < pageNumber) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };

  return (
    <nav
      className="pagination is-centered pag-bg mb-0 p-4"
      role="navigation"
      aria-label="pagination"
    >
      <a
        className={`pagination-previous ${
          currentPage === 1 ? "is-disabled" : ""
        }`}
        onClick={onPreviusPage}
      >
        Anterior
      </a>
      <a
        className={`pagination-next ${
          currentPage === handlePageNumber(category) ? "is-disabled" : ""
        }`}
        onClick={onNextPage}
      >
        Siguiente
      </a>
      <ul className="pagination-list">
        {Array.from(
          { length: handlePageNumber(category) },
          (_, index) => index + 1
        ).map((number) => (
          <li key={number}>
            <a
              onClick={() => onSpecificPage(number)}
              className={`pagination-link ${
                number === currentPage ? "is-current" : ""
              }`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
