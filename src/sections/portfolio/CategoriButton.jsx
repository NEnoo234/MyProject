import React from "react";

const CategoriButton = ({ category, className, onChangeCategory }) => {
  return (
    <button className={className} onClick={() => onChangeCategory(category)}>
      {category}
    </button>
  );
};

export default CategoriButton;
