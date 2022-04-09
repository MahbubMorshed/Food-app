import React from "react";
import CustomImage from "./CustomImage";

const HeroSection = () => {
  const images = [
    "/img/gallery/img_1.jpg",
    "/img/gallery/img_2.jpg",
    "/img/gallery/img_3.jpg",
    "/img/gallery/img_4.jpg",
    "/img/gallery/img_5.jpg",
    "/img/gallery/img_6.jpg",
    "/img/gallery/img_7.jpg",
    "/img/gallery/img_8.jpg",
    "/img/gallery/img_9.jpg",
  ];
  return (
    <div className="section hero">
      <div className="cols">
        <h1 className="title">What are we about</h1>
        <p className="info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          neque porro quibusdam facilis tempora veniam doloremque similique
          officia eaque perferendis.
        </p>
        <button className="btn">Explore now</button>
      </div>
      <div className="cols gallery">
        {images.map((src, index) => (
          <CustomImage imgSrc={src} pt={"85%"} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
