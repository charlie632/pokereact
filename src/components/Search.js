import React, { useState } from "react";
import { useHistory } from "react-router";

const Search = () => {
  let [search, setSearch] = useState("");
  let history = useHistory();
  const handleSearch = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/pokemon/${search}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="type a pokemon" onChange={handleSearch} />
        <button type="submit" onClick={handleSubmit}>
          GO!
        </button>
      </form>
    </div>
  );
};

export default Search;
