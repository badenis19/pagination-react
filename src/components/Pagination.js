import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  // will give us the correct amount of page numbers
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">{number}</a>
          </li>
        ))}
      </ul>
    </nav>

  );
};

export default Pagination;