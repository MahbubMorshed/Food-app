import React from "react";

const ChiefCard = () => {
  return (
    <div className="chief-card">
      <img src="/img/top-chef/img_1.jpg" alt="" />
      <div className="chief-card-info">
        <h3 className="chief-card-name">Juan Carlos</h3>
        <p className="chief-recipe-count">
          Recipes: <b>10</b>
        </p>
        <p className="chief-cuisine">
          Cuisine: <b>Mexican</b>
        </p>
      </div>
    </div>
  );
};

export default ChiefCard;
