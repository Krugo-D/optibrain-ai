// components/Tool/Tool.jsx
import React from "react";
import Overview from "./Overview";
import Characteristics from "./Characteristics";
import Tips from "./Tips";
import ExamplePrompts from "./ExamplePrompts";
import ExpertReview from "./ExpertReview";
import Rating from "./Rating/Rating";
import ProCon from "./ProCon/ProCon";

const Tool = ({ tool }) => {
  return (
    <div className="container">
      <div id="AI-Tool-Overview">
        <Overview tool={tool} />
      </div>
      <div id="Characteristics">
        <Characteristics tool={tool} />
      </div>
      <div id="Expert-Review">
        <ExpertReview tool={tool} />
      </div>
      <div id="AI-Tool-Ratings">
        <Rating tool={tool} />
      </div>
      <div id="Pros-&-Cons">
        <ProCon tool={tool} />
      </div>
      <div id="Use-Cases-and-Examples">
        <ExamplePrompts tool={tool} />
      </div>
      <div id="Tips-and-Tricks-for-Using-the-AI-Tool">
        <Tips tool={tool} />
      </div>
    </div>
  );
};

export default Tool;
