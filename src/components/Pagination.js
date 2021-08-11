import React from "react";
const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (var x = 1; x <= Math.ceil(totalPosts / postPerPage); x++) {
    pageNumbers.push(x);
  }
  return (
    <>
      <nav className="mb-2">
        <ul className="justify-content-center pagination">
          {pageNumbers.map((no) => (
            <li key={no} className="page-item">
              <a onClick={() => paginate(no)} href="!#" className="page-link">
                {no}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default Pagination;
