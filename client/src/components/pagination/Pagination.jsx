import React, { useState, useEffect } from "react";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handlePageClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const renderData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end).map((item) => {
      return (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      );
    });
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} id={i} onClick={handlePageClick} className={i === currentPage ? "active" : null}>
          {i}
        </li>,
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <div>
        <label>Items per page: </label>
        <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
      {renderData()}
      <ul id="page-numbers">{renderPageNumbers()}</ul>
    </div>
  );
}

export default Pagination;
