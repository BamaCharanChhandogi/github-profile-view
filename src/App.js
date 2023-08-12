import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [username,setUsername]=useState('');
  const [userData,setUserData]=useState(null);
    const fetchProfile=async ()=>{
      try {
        const url=await fetch(`https://api.github.com/users/${username}`);
      const data=await url.json();
      setUserData(data);
      } catch (error) {
        console.log('error');
      }
    }
  return (
    <div className="App">
      <div className="navbar">
        <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="" />
        <h1><span>Git</span>Finder</h1>
      </div>
      <div className="middle">
        <div className="search-bar">
          <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='search name'/>
          <button onClick={fetchProfile}>Search</button>
        </div>
      </div>
      <div className="main-profile">
        <div className="box">
          {userData && (
        <div className="user-profile">
          <img src={userData.avatar_url} alt="Profile Avatar" />
          <h2>{userData.login}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit Profile
          </a>
        </div>
      )}
        </div>
      </div>
    </div>
  );
}

export default App;
