import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (query === "") {
      alert("Please enter a search query");
      return;
    }

    props.onSearch(query);
    navigate("/search");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // location.pathname = "/search";
      handleSearch();
    }
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
          alt=""
        />
        <div className="header">
          <Link to="/">
            <h1>
              <span>Git</span>Finder
            </h1>
          </Link>
        </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Username"
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="list-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/repo">Repository</Link>
          </li>
          <li>
            <Link to="/Help">Help</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
