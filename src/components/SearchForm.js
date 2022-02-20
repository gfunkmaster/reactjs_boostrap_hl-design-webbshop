import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { query, setQuery } = useGlobalContext();

  console.log(query)

  {
      
    /* query is coming from my context, passing in our written value to setQuery */
  }
  return (
    <>
      

    <form onSubmit={handleSubmit} className="mb-2 w-100 d-block">
      <div className="row">
        <div className=" col-md-4 d-flex flex-row w-100">
          <input
            className="form-control w-100 py-2 border-right-0 border fs-6  fw-light"
            placeholder="Search products..."
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            id="example-search-input"
          />
          <span className="input-group-append">
            <button
            style={{
              display: 'block',
              paddingBottom: '0.8rem'
            }}
              className="btn btn-outline-secondary border-left-0 border"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </form>
    </>
  );
};

export default SearchForm;
