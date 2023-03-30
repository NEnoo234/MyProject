import React from "react";
import Modal from "./../components/Modal";
import { primaryColors, backgroundColors } from "./data";
import BackgroundColors from "./BackgroundColors";
import PrimaryColor from "./PrimaryColor";
import "./theme.css";

const Theme = () => {
  return (
    <Modal className="theme__modal">
      <h3>Customize Your Theme</h3>
      <small>Chang the primary and background color to you preference.</small>

      <div className="theme__primary-wrapper">
        <h5> Primary Color</h5>
        <div className="theme__primary-colors">
          {primaryColors.map((pcolor) => (
            <PrimaryColor
              key={pcolor.className}
              className={pcolor.className}
            ></PrimaryColor>
          ))}
        </div>
      </div>
      <div className="theme__background-wrapper">
        <h5>Background Color</h5>
        <div className="theme__background-colors">
          {backgroundColors.map((bcolor) => (
            <BackgroundColors
              key={bcolor.className}
              className={bcolor.className}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Theme;
