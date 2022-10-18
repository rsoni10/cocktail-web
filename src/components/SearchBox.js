import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchCocktails } from "../redux/features/CocktailSlice";

const SearchBox = () => {
  const searchTerm = useRef();
  const [searchItem ,setSearchItem] = useState()
  const dispatch = useDispatch();
  console.log("searchItem",searchItem)
  const handleChange = (e) => {
    const searchText = searchTerm.current.value;
    // setSearchItem(e.target.value)
    console.log("searchTextsearchText",searchText)
    dispatch(fetchSearchCocktails(searchText));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              ref={searchTerm}
              onChange={()=>handleChange()}
              className="form-control"
              placeholder="Serach Here"
              style={{ width: "350px" }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBox;