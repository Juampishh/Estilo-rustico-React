import React from "react";
import productos from "../../assets/Data/data";

const Pagination = ({ productsPerPage, currentPage, setCurrentPage }) => {
  const pageNumber = Math.ceil(productos.length / productsPerPage);

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
          currentPage === pageNumber ? "is-disabled" : ""
        }`}
        onClick={onNextPage}
      >
        Siguiente
      </a>
      <ul className="pagination-list">
        {Array.from({ length: pageNumber }, (_, index) => index + 1).map(
          (number) => (
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
          )
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
