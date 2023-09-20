import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './Components/navbar';
import Repo from './Components/repo';
import Main from './Components/Main';
function App() {
  // const [username, setUsername] = useState('');
  // const [userData, setUserData] = useState(null);
  // const [defaultProfiles, setDefaultProfiles] = useState([]);
  // useEffect(() => {
  //   const defaultProfile = async () => {
  //     try {
  //       const response = await axios.get(`https://api.github.com/users`);
  //       setDefaultProfiles(response.data);
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //   }
  //   defaultProfile();
  // });
  // const fetchProfile = async () => {
  //   try {
  //     const url = await axios.get(`https://api.github.com/users/${username}`);
  //     const data = await url.data;
  //     setUserData(data);
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // }
  return (
    <div className="App">
      {/* <div className="navbar">
        <div className="logo">
        <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="" />
        <div className="header">
        <h1><span>Git</span>Finder</h1>
        </div>
        </div>
        <div className="list-item">
          <ul>
            <li><a>Home</a></li>
            <li><a href="">Repository</a></li>
            <li><a href="">Help</a></li>
          </ul>
        </div>
      </div> */}
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/Main' element={<Main/>} />
          <Route path='/repo' element={<Repo/>}/>
        </Routes>
      </Router>
      {/* <div className="middle">
        <div className="search-bar">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Search Username' />
          <button onClick={fetchProfile}>Search</button>
        </div>
      </div> */}
      {/* <div className="main-profile">
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
        {
           userData==null && defaultProfiles.length>0&&(
            <div className="default-profile-main">
              <h2>Top Profiles</h2>
              <div className="default-profiles">
                {defaultProfiles.map(profile => (
                  <div key={profile.id} className="default-profile">
                    <img src={profile.avatar_url} alt="Profile Avatar" />
                    <h3>{profile.login}</h3>
                    <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
                      Visit Profile
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )
        }
      </div> */}
    </div>
  );
}

export default App;
