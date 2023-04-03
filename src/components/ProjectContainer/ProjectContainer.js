import React from "react";
// import { todolistImg } from "../assets/to-do-list app.png";
import { Element } from "react-scroll";
import Project from "../Project/Project";
import './ProjectContainer.css'
const ProjectContainer = () => {
  const projects = [
    { 
      title:'TO-DO-LIST APP',
      img: "https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png",
      description:
        "Simple To-Do-List application absolute beginner level .It will u make to learn HTML,CSS & JAVASCRIPT.",
      link: "https://kodiyarasuc.github.io/Simple-To-Do-List-application/",
    },
    {
      img: "https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png",

      description:
        "Simple To-Do-List application absolute beginner level .It will u make to learn HTML,CSS & JAVASCRIPT.",
      link: "https://kodiyarasuc.github.io/Simple-To-Do-List-application/",
    },
    {
      img: "https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png",

      description:
        "Simple To-Do-List application absolute beginner level .It will u make to learn HTML,CSS & JAVASCRIPT.",
      link: "https://kodiyarasuc.github.io/Simple-To-Do-List-application/",
    },
    {
      img: "https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png",

      description:
        "Simple To-Do-List application absolute beginner level .It will u make to learn HTML,CSS & JAVASCRIPT.",
      link: "https://kodiyarasuc.github.io/Simple-To-Do-List-application/",
    },
  ];
  return (
    <div>
      <Element className="projectContainer" id="projects">
        <h1><span>P</span>rojects</h1>
        <p>
          Here are some projects will be created.It's will help u to learn basic
          HTML,CSS,JAVASCRIPT etc..{" "}
        </p>
        <div className="projectContainer_projects">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                img={project.img}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            );
          })}
        </div>
      </Element>
    </div>
  );
};

export default ProjectContainer;
