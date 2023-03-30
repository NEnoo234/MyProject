import CategoriButton from "./CategoriButton";
import { useState } from "react";

const ProjectCategories = ({ catagories, onFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const changeCategoryHandler = (activeCate) => {
    setActiveCategory(activeCate);
    onFilterProjects(activeCate);
  };
  return (
    <div className="portfolio__categories">
      {catagories.map((category) => (
        <CategoriButton
          key={category}
          category={category}
          onChangeCategory={() => changeCategoryHandler(category)}
          className={`btn cat__btn ${
            activeCategory == category ? "primary" : "white"
          }`}
        />
      ))}
    </div>
  );
};

export default ProjectCategories;
