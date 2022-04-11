import React from "react";
import ChiefCard from "./ChiefCard";

const ChiefSection = () => {
  return (
    <div className="section chiefs">
      <h1 className="title">Our top Chiefs</h1>
      <div className="top-chief-container">
        <ChiefCard />
      </div>
    </div>
  );
};

export default ChiefSection;
