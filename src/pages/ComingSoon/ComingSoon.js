import React from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./ComingSoon.css";

const ComingSoon = () => {
  return (
    <div className="comingSoonContainer">
      <HeaderComponent />
      <div className="comingSoonBG">
        <img src={require("../../assets/images/map.jpg")} alt="map" />
      </div>
      <p className="comingSoonText">Coming Soon</p>
    </div>
  );
};

export default ComingSoon;
