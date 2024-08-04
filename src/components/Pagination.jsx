import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaginationCSS.css';

const Pagination = ({ pages, currentPageIndex, setCurrentPageIndex }) => {
  const navigate = useNavigate();

  const handlePageClick = (pageIndex) => {
    setCurrentPageIndex(pageIndex);
    navigate(pages[pageIndex]);
  };

  return (
    <div className="pagination">
      {pages.map((page, index) => (
        <button
          key={page}
          className={`pagination-button ${currentPageIndex === index ? "active" : ""}`}
          onClick={() => handlePageClick(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
