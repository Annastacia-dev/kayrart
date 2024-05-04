/* eslint-disable react/prop-types */
import { useState } from 'react';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i}>
          <button className={` px-4 py-2 ${currentPage === i ? 'bg-black text-white' : 'bg-primary'}`} onClick={() => handlePageChange(i)}>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <ul className="page-numbers">{renderPageNumbers()}</ul>
    </div>
  );
};

export default Pagination;
