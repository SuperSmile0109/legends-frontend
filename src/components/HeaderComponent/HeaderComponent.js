import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Hamburger from "hamburger-react";
import { ReactComponent as Logo } from "../../assets/images/logo1.svg";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <div className="header">
        <div className="container">
          <a href="/">
            <Logo />
          </a>

          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/home">
                Leaderboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/home">
                Marketplace
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/home">
                Inventory
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/home">
                News
              </a>
            </li>
          </ul>

          <div className="buttonContainer">
            <Button className="whitepaperButton" title="Whitepaper" />
            <Button className="playButton" title="Play Now" target="/play" />
          </div>

          <Hamburger
            color="white"
            onToggle={(toggled) => {
              if (toggled) {
                // open a menu
                setShowMobileMenu(true);
              } else {
                // close a menu
                setShowMobileMenu(false);
              }
            }}
          />
        </div>
      </div>
      {showMobileMenu ? (
        <div className="mobileMenu">
          <div className="mobileNavItem">
            <a href="/" className="mobileNavLink">
              <h3>Home</h3>
            </a>
          </div>
          <div className="mobileNavItem">
            <a href="/" className="mobileNavLink">
              <h3>Leaderboard</h3>
            </a>
          </div>
          <div className="mobileNavItem">
            <a href="/" className="mobileNavLink">
              <h3>Marketplace</h3>
            </a>
          </div>
          <div className="mobileNavItem">
            <a href="/" className="mobileNavLink">
              <h3>Inventory</h3>
            </a>
          </div>
          <div className="mobileNavItem">
            <a href="/" className="mobileNavLink">
              <h3>News</h3>
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default HeaderComponent;
