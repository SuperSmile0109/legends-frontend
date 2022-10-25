import React, { useState } from "react";
import "./FaqItem.css";
import parser from 'html-react-parser';

const FaqItem = ({ title, comment }) => {
  const [showAnswer, setShowAnswer] = useState(true);

  const toggleAnswer = () => {
    showAnswer ? setShowAnswer(false) : setShowAnswer(true);
  };

  return (
    <div className="faqItemContainer">
      <div className="faqItemHeader">
        <p className="faqItemQuestion">{parser(title)}</p>
        <div className="faqItemDropButton" onClick={toggleAnswer}>
          <img
            src={require("../../assets/images/faq-drop-button.png")}
            alt="FAQ Drop Button"
          />
        </div>
      </div>
      {showAnswer ? (
        <p className="faqItemContent">
          {parser(comment)}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default FaqItem;
