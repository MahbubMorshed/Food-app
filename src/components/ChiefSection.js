import React from "react";
import ChiefCard from "./ChiefCard";

const ChiefSection = () => {
  const chiefs = [
    {
      name: "Chris",
      img: "/img/top-chef/img_1.jpg",
      recipesCount: "08",
      cuisine: "Italian",
    },
    {
      name: "Haris",
      img: "/img/top-chef/img_2.jpg",
      recipesCount: "10",
      cuisine: "Mexican",
    },
    {
      name: "Godor",
      img: "/img/top-chef/img_3.jpg",
      recipesCount: "15",
      cuisine: "French",
    },
    {
      name: "Ching",
      img: "/img/top-chef/img_4.jpg",
      recipesCount: "20",
      cuisine: "Chineis",
    },
    {
      name: "Polo",
      img: "/img/top-chef/img_5.jpg",
      recipesCount: "12",
      cuisine: "Thai",
    },
    {
      name: "John",
      img: "/img/top-chef/img_6.jpg",
      recipesCount: "5",
      cuisine: "Asian",
    },
  ];
  return (
    <div className="section chiefs">
      <h1 className="title">Our top Chiefs</h1>
      <div className="top-chief-container">
        {chiefs.map((chief) => (
          <ChiefCard key={chief.name} chief={chief} />
        ))}
      </div>
    </div>
  );
};

export default ChiefSection;
