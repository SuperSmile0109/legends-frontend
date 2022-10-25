import React, {useEffect} from "react";
import "./CardSection.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

import { collectAction, collectImgAction } from '../../redux/dashboard/actions';
import { useDispatch, useSelector } from 'react-redux';
import parser from 'html-react-parser';

const CardSection = () => {
  const dispatch = useDispatch();
  const collectText = useSelector(state => state.dashboard.collectText);
  const collectImgs = useSelector(state => state.dashboard.collectImgs);
  useEffect(() => {
    dispatch(collectAction({type: 'get'}));
    dispatch(collectImgAction({type: 'get'}));
  }, [])
  return (
    <div className="cardSectionContainer">
      <div className="container">
        <img
          className="cardSectionBG"
          src={require("../../assets/images/background-card.jpeg")}
          alt="Team Background"
        />
        <div className="cardSectionContent">
          <h1>COLLET THEM ALL</h1>
          <div className="sectionSeparator"></div>
          <p>
            {parser(collectText)}
          </p>
        </div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="cardSwiper"
        >
          {collectImgs && collectImgs.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={require(`../../assets/images/upload/card-slider/${item.hash_name}`)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardSection;
