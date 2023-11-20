import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import Github from "./Github";
import DefaultProfile from "./DefaultProfile";

function Main(props) {
  const [userData, setUserData] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [showContainer, setShowContainer] = useState(false);

  console.log(props.searchQuery);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (props.searchQuery === "") {
          alert("Please enter a username");
          return;
        }

        const trimmedUsername = props.searchQuery.trim();

        if (trimmedUsername === "") {
          return;
        }

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
        alert("Username incorrect, Refresh site");
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [props.searchQuery]);

  return (
    <div>
      {showContainer && (
        <div id="container" className="main-profile">
          <div className="box">
            <div className="user-img">
              <img src={userData.avatar_url} alt="Profile Avatar" />
            </div>
            <div className="user-details">
              <h2>{userData.name || userData.login}</h2>
              <p>{userData.bio || "Bio: Not Specified"}</p>
              <p>Location: {userData.location || "Not specified"}</p>
              <p>Repositories: {userData.public_repos}</p>
              <p>Followers: {userData.followers}</p>
              <a
                href={userData.blog || userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Portfolio
              </a>
            </div>
          </div>
          <div className="repositoriesDiv">
            {repositories.map((repo) =>
              repo.fork == true ? (
                ""
              ) : (
                <div key={repo.id} className="repository">
                  <h3>{repo.name}</h3>
                  <p>
                    <strong>Language:</strong>{" "}
                    {repo.language || "Not specified"}
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
              )
            )}
            {props.searchQuery != null ? (
              <Github username={props.searchQuery} />
            ) : (
              ""
            )}
          </div>
        </div>
      )}
      {userData == null ? <DefaultProfile /> : ""}
    </div>
  );
}

export default Main;
