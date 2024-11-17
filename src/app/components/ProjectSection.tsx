import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia.",
    image: "/images/projects/project-1.jpg",
    tags: ["All", "Web"]
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quia.",
    image: "/images/projects/project-2.jpg",
    tags: ["All", "Web"]
  },
];


const ProjectSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div>
        {projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} tags={project.tags} />)}
      </div>
    </>
  );
};

export default ProjectSection;