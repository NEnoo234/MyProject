import "./portfolio.css";
import Project from "./Projects";
import ProjectCategories from "./ProjectCategories";
import data from "./data";
import { useState } from "react";
const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const catagories = data.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(catagories)];

  const filterProjectshandler = (category) => {
    if (category === "all") {
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };

  return (
    <section id="portfolio">
      <h2> Recent Project </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        veritatis laudantium. Non officiis, nesciunt, deleniti, quos ipsa libero
        nam laborum quibusdam quo sit voluptas dolores deserunt excepturi culpa!
        Porro, enim!
      </p>
      <div className="container portfolio__container">
        <ProjectCategories
          catagories={uniqueCategories}
          onFilterProjects={filterProjectshandler}
        />
        <Project projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
