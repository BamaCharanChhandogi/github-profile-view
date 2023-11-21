import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

function DefaultProfile() {
    const [defaultProfiles, setDefaultProfiles] = useState([]);
    useEffect(() => {
        const defaultProfile = async () => {
          try {
            const response = await axios.get(`https://api.github.com/users`);
            setDefaultProfiles(response.data);
          } catch (error) {
            console.log("error", error);
          }
        };
        defaultProfile();
      }, []);
  return (
    <div>
      {defaultProfiles.length==0?<h1 className="server">Can't fetching...server is slow😒</h1>: (
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
      )}
    </div>
  )
}

export default DefaultProfile;
