import React, {useEffect} from "react";
import "./PartnershipSection.css";
import { useDispatch, useSelector } from "react-redux";
import { partnershipAction } from '../../redux/dashboard/actions';

const PartnershipSection = () => {
  const dispatch = useDispatch();
  const partnerships = useSelector(state => state.dashboard.partnerships);
  useEffect(() => {
    dispatch(partnershipAction({type: 'get'}));
  }, []);
  return (
    <div className="partnershipContainer">
      <div className="container">
        <h1>Partnership</h1>
        <div className="sectionSeparator"></div>
        <div className="partners">
          {partnerships && partnerships.map((item, index) => (
            <a key={index} href={item.link} target="__blank">
              <img
                className="partner"
                src={require(`../../assets/images/upload/${item.hash_name}`)}
                alt="Partnership1"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;
