import React from "react";
import GitHubCalendar from "react-github-calendar";
import '../App.css'
function Github(props) {
  return (
    <div className="Github">
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username={props.username}
        blockSize={14}
        blockMargin={5}
        // color="#c084f5"
        fontSize={16}
      />
    </div>
  );
}

export default Github;
