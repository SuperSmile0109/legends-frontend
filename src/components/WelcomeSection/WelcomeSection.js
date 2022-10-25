import React, {useEffect} from "react";
import Button from "../Button/Button";
import "./WelcomeSection.css";
import { useDispatch, useSelector } from 'react-redux';
import { dashboardTextAction } from '../../redux/dashboard/actions';
import parse from 'html-react-parser';

const WelcomeSection = () => {
  const dispatch = useDispatch();
  const dashboardText = useSelector(state => state.dashboard.dashboardText);
  
  console.log(dashboardText);

  useEffect(() => {
    dispatch(dashboardTextAction({type: 'get'}));
  }, []);

  return (
    <div className="welcomeContainer">
      <img
        className="welcomeContainerBG"
        src={require('../../assets/images/upload/main_background.jpg')}
        alt="Main Background"
      />
      <div className="welcomeContent">
        <img
          className="logo2"
          src={require("../../assets/images/logo2.png")}
          alt="Logo2"
        />
        <p className="welcomeText">{parse(dashboardText)}</p>
        <Button title="Play Now" target="/play" />
      </div>
    </div>
  );
};

export default WelcomeSection;
