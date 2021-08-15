import { useEffect, useState } from "react";

const Pagination = ({
  pages,
  setCurrentPage,
  employeesLength,
  currentEmployees,
}) => {
  const numOfPages = [];

  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);

  useEffect(
    (e) => {
      setCurrentPage(currentButton);
    },
    [currentButton, setCurrentPage]
  );

  return (
    <div className="clearfix">
      <div className="hint-text">
        Showing <b>{currentEmployees}</b> out of <b>{employeesLength}</b>{" "}
        entries
      </div>
      <ul className="pagination">
        <li
          className={`${
            currentButton === 1 ? "page-item disabled" : "page-item"
          }`}
        >
          <a
            href="#!"
            className="page-link"
            onClick={(e) => {
              e.preventDefault();
              return setCurrentButton((prev) => (prev === 1 ? 1 : prev - 1));
            }}
          >
            Previous
          </a>
        </li>
        {numOfPages.map((page, index) => (
          <li
            key={index}
            className={`${
              currentButton === page ? "page-item active" : "page-item"
            }`}
          >
            <a
              href="#!"
              className="page-link"
              onClick={(e) => {
                e.preventDefault();
                setCurrentButton(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}

        <li
          className={`${
            currentButton === numOfPages.length
              ? "page-item disabled"
              : "page-item"
          }`}
        >
          <a
            href="#!"
            className="page-link"
            onClick={(e) => {
              e.preventDefault();
              return setCurrentButton((prev) =>
                prev === numOfPages.length ? numOfPages.length : prev + 1
              );
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
