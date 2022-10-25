import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <a href={props.target} className="button">
      <div className="buttonBG">
        <div className="buttonText">{props.title}</div>
        <div className="buttonGradientBG"></div>
      </div>
    </a>
  );
};

export default Button;
