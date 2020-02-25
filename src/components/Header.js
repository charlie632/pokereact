import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
      }}
    >
      <Link to="/">
        <h1>Kewl Pokédex</h1>
      </Link>
      <Search />
    </div>
  );
};

export default Header;
