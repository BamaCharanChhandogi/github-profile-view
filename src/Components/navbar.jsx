import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
        <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="" />
        <div className="header">
        <h1><span>Git</span>Finder</h1>
        </div>
        </div>
        <div className="list-item">
          <ul>
            <li><Link to="/Main">Home</Link></li>
            <li><Link to="/repo">Repository</Link></li>
            <li><Link to="/Help">Help</Link></li>
          </ul>
        </div>
      </div>
  )
}

export default Navbar;
