import React, {useEffect} from "react";
import FaqItem from "../FaqItem/FaqItem";
import "./FaqSection.css";
import { useDispatch, useSelector } from 'react-redux';
import { faqsAction } from '../../redux/dashboard/actions';

const FaqSection = () => {
  const dispatch = useDispatch();
  const faqs = useSelector(state => state.dashboard.faqs);
  useEffect(() => {
    dispatch(faqsAction({type: 'get'}));
  }, []);
  return (
    <div className="faqContainer">
      <div className="container">
        <h1>FAQS</h1>
        <div className="sectionSeparator"></div>
        {faqs.map((item, index) => (
          <FaqItem key={index} title={item.title} comment={item.comment} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
