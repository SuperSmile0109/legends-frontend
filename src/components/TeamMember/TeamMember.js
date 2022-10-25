import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as TelegramIcon } from "../../assets/images/social-media-1.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/social-media-9.svg";
import "./TeamMember.css";

const TeamMember = (props) => {
  return (
    <div className="teamMemberContainer">
      <img
        className="teamMemberAvatar"
        src={require(`../../assets/images/upload/teams/${props.imgURL}`)}
        alt="character"
      />
      <p className="role">{props.role}</p>
      <p className="memberName">{props.memberName}</p>
      <div>
        {props.telegramID ? (
          <a href={props.telegramID}>
            <TelegramIcon />
          </a>
        ) : (
          ""
        )}
        {props.twitterURL ? (
          <a href={props.twitterURL}>
            <TwitterIcon />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TeamMember;
