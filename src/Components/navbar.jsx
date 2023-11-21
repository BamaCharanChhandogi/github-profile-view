import React, { useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";

function Navbar(props) {
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");

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
      handleSearch();
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" onClick={() => handleTabClick("/")}>
              Home
            </Link>
          </li>
          <li className={location.pathname === "/repo" ? "active" : ""}>
            <Link to="/repo" onClick={() => handleTabClick("/repo")}>
              Repository
            </Link>
          </li>
          <li className={location.pathname === "/help" ? "active" : ""}>
            <Link to="/help" onClick={() => handleTabClick("/help")}>
              Help
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
