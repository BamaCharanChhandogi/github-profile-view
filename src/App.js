import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Repo from "./Components/repo";
import Main from "./Components/Main";
import DefaultProfile from "./Components/DefaultProfile";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="App">
      <Router>
        <Navbar onSearch={(query) => setSearchQuery(query)} />
        <Routes>
          <Route path="/search" element={<Main searchQuery={searchQuery} />} />
          <Route path="/" element={<DefaultProfile />} />
          <Route path="/repo" element={<Repo />} />
          {/* <Route path='/help' element={<Help />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
