import React, { useState } from "react";
import '../Project/Project.css'
const Project = ({ img, description, link, title }) => {
  let [ show, setShow ] = useState(false);
  return (
    <div>
      <a href={link}>
        <div className="project"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {show ? <div className="project_content">
          <h4>{title}</h4>
          <p>{description}</p>
          
          </div> : <img src={img} alt=""></img>}
        </div>
      </a>
    </div>
  );
};

export default Project;
