import React, {useEffect} from "react";
import "./IntroductionSection.css";
import { useDispatch, useSelector } from 'react-redux';
import { mapAction, mapLinkAction } from '../../redux/dashboard/actions';
import parser from 'html-react-parser';

const IntroductionSection = () => {
  const dispatch = useDispatch();
  const mapText = useSelector(state => state.dashboard.mapText);
  const mapLink = useSelector(state => state.dashboard.mapLink);
  useEffect(() => {
    dispatch(mapAction({type: 'get'}));
    dispatch(mapLinkAction({type: 'get'}));
  }, []);
  return (
    <div className="introductionContainer">
      <div className="container">
        <div className="introductionHeader">
          <img
            className="introductionLogo"
            src={require("../../assets/images/logo1.png")}
            alt="Logo1"
          />
          <div className="downloadButtonContainer">
            <div className="downloadButton">
              <img
                src={require("../../assets/images/download-mac.png")}
                alt="Mac Download"
              />
              <span>Mac</span>
            </div>
            <div className="downloadButton">
              <img
                src={require("../../assets/images/download-windows.png")}
                alt="Windows Download"
              />
              <span>Windows</span>
            </div>
          </div>
        </div>
        <div className="introductionContent">
          <p className="introductionText">
            {parser(mapText)}
          </p>
          <a href={mapLink} target="__blank">
          <img style={{ width: '100%' }}
            className="introductionVideo"
            src={require("../../assets/images/map.jpg")}
            alt="Map"
          />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
