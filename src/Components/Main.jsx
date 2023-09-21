import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Github from "./Github";
import DefaultProfile from "./DefaultProfile";

function Main() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [showContainer, setShowContainer] = useState(false);
  const [defaultProfiles, setDefaultProfiles] = useState([]);
  // useEffect(() => {
  //   const defaultProfile = async () => {
  //     try {
  //       const response = await axios.get(`https://api.github.com/users`);
  //       setDefaultProfiles(response.data);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   defaultProfile();
  // }, []);

  const fetchData = async () => {
    if(username==''){
      alert('Please enter a username');
    }
    const trimmedUsername = username.trim();

    if (trimmedUsername === "") {
      return;
    }

    try {
      const userResponse = await axios.get(
        `https://api.github.com/users/${trimmedUsername}`
      );
      const userData = userResponse.data;
      setUserData(userData);
      setShowContainer(true);

      const repositoriesResponse = await axios.get(
        `https://api.github.com/users/${trimmedUsername}/repos`
      );
      const repositoriesData = repositoriesResponse.data;

      setRepositories(repositoriesData);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <div className="middle">
        <div className="search-bar">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Search Username"
          />
          <button onClick={fetchData}>Search</button>
        </div>
      </div>
      {showContainer && (
        <div id="container" className="main-profile">
          <div className="box">
            <div className="user-img">
              <img src={userData.avatar_url} alt="Profile Avatar" />
            </div>
            <div className="user-details">
            <h2>{userData.name}</h2>
              <p>{userData.bio}</p>
              <a href={userData.blog} target="_blank" rel="noopener noreferrer">
                Visit Portfolio
              </a>
              <p>Location: {userData.location || "Not specified"}</p>
              <p>Repositories: {userData.public_repos}</p>
              <p>Followers: {userData.followers}</p>
            </div>
          </div>
          <div className="repositoriesDiv">
            {repositories.map((repo) => (
              repo.fork==true?'':
              <div key={repo.id} className="repository">
                <h3>{repo.name}</h3>
                <p>
                  <strong>Language:</strong> {repo.language || "Not specified"}
                </p>
                <p>
                  <strong>Stars:</strong> {repo.stargazers_count}
                </p>
                <p>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Repository
                  </a>
                </p>
              </div>
            ))}
            {
              username!=null?<Github username={username}/>:''
            }
          </div>
        </div>
        
      )}
      {/* {defaultProfiles.length==0?<h1 className="server">Can't fetching...server is slow😒</h1>:userData == null && defaultProfiles.length > 0 && (
        <div className="default-profile-main">
          <h2>Top Profiles</h2>
          <div className="default-profiles">
            {defaultProfiles.map((profile) => (
              <div key={profile.id} className="default-profile">
                <img src={profile.avatar_url} alt="Profile Avatar" />
                <h3>{profile.login}</h3>
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      )} */}
      {
        userData==null? <DefaultProfile/>:''
      }
    </div>
  );
}

export default Main;
