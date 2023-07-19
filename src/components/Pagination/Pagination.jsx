import React from "react";
import productos from "../../assets/Data/data";

const Pagination = ({ productsPerPage, currentPage, setCurrentPage }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(productos.length / productsPerPage); i++) {
    pageNumber.push(i);
  }
  const onPreviusPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };
  return (
    <nav
      className="pagination is-centered pag-bg mb-0 p-4 "
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
          currentPage >= pageNumber.length ? "is-disabled" : ""
        }`}
        onClick={onNextPage}
      >
        Siguiente
      </a>
      <ul className="pagination-list">
        {pageNumber.map((number) => (
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
