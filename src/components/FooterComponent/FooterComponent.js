import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { 
  contactUsTextAction, 
  availableAction, 
  tokenPriceAction, 
  tokenPercentAction,
  socialLinkAction
} from '../../redux/dashboard/actions';
import parser from 'html-react-parser';

import "./FooterComponent.css";
import { ReactComponent as ArrowUp } from "../../assets/images/arrow-up.svg";

const FooterComponent = () => {
  const dispatch = useDispatch();
  const contactUsText = useSelector(state => state.dashboard.contactUsText);
  const availables = useSelector(state => state.dashboard.availables);
  const tokenPrice = useSelector(state => state.dashboard.tokenPrice);
  const tokenPercent = useSelector(state => state.dashboard.tokenPercent);
  const socialLinks = useSelector(state => state.dashboard.socialLinks);
  useEffect(() => {
    dispatch(contactUsTextAction({ type: 'get' }));
    dispatch(availableAction({ type: 'get' }));
    dispatch(tokenPriceAction({ type: 'get' }));
    dispatch(tokenPercentAction({ type: 'get' }));
    dispatch(socialLinkAction({ type: 'get' }));
  }, []);
  return (
    <div className="footerContainer">
      <div className="container">
        <div className="footerLogoSocial">
          <img
            className="introductionLogo"
            src={require("../../assets/images/logo1.png")}
            alt="Logo1"
          />
          <div>
            {socialLinks && socialLinks.map((item, index) => (
              <a href={item.link} target="__blank" key={index}>
                <img src={require(`../../assets/images/upload/social_links/${item.hash_name}`)} />
              </a>
            ))}
          </div>
        </div>

        <div className="footerContent">
          <ul className="footerMenu">
            <li>
              <a href="blank">Home</a>
            </li>
            <li>
              <a href="blank">Leaderboard</a>
            </li>
            <li>
              <a href="blank">Marketplace</a>
            </li>
            <li>
              <a href="blank">Inventory</a>
            </li>
            <li>
              <a href="blank">News</a>
            </li>
            <li>
              <a href="blank">WhitePaper</a>
            </li>
            <li>
              <a href="blank">Jobs</a>
            </li>
            <li>
              <a href="blank">Partnership</a>
            </li>
          </ul>
          <div className="footerToken">
            <img
              className="footerTokenLogo"
              src={require("../../assets/images/logo3.png")}
              alt="logo3"
            />
            <div>
              <p>Token Price</p>
              <p>$ {tokenPrice}</p>
              <div className="footerTokenPrice">
                <ArrowUp />
                <p>{tokenPercent} %</p>
              </div>
            </div>
          </div>
          <div className="availableContainer">
            <p>Available on</p>
            <div>
              {availables && availables.map((item, index) => (
                <div className="availableItem" key={index}>
                  <img src={require(`../../assets/images/upload/availables/${item.hash_name}`)} style={{ width: 25, height: 25 }} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="contactUsContainer">
            <p>Contact us</p>
            <p>
              {parser(contactUsText)}
            </p>
          </div>
        </div>

        <p className="footerCopyright">Legends © 2022, Powered by FWC</p>
      </div>
    </div>
  );
};

export default FooterComponent;
