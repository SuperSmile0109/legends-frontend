import React, { useEffect } from "react";
import TeamMember from "../TeamMember/TeamMember";
import "./TeamSection.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import { useDispatch, useSelector } from 'react-redux';
import { ourteamAction, memberAction } from '../../redux/dashboard/actions';
import parser from 'html-react-parser';

const TeamSection = () => {
  const dispatch = useDispatch();
  const ourteamText = useSelector(state => state.dashboard.ourteamText);
  const members = useSelector(state => state.dashboard.members);
  useEffect(() => {
    dispatch(ourteamAction({type: 'get'}));
    dispatch(memberAction({type: 'get'}));
  }, []);
  return (
    <div className="teamContainer">
      <div className="container">
        <img
          className="teamBackground"
          src={require("../../assets/images/background-team.jpg")}
          alt="Team Background"
        />
        <div className="teamContent">
          <h1>Our Team</h1>
          <div className="sectionSeparator"></div>
          <p>
            {parser(ourteamText)}
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination]}
          className="teamSwiper"
        >
          {members && members.map((item, index) => (
            <SwiperSlide key={index}>
              <TeamMember
                characterNo={index}
                role={item.role} 
                imgURL={item.hash_name} 
                memberName={item.name}
                telegramID={item.socialLinks.telegram}
                twitterURL={item.socialLinks.twitter}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamSection;
