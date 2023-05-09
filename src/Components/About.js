import React from 'react';
import AboutBackground from '../Assets/about-background.png';
import FarmerBackgroundImage from '../Assets/FarmerAboutBackground.png'

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={FarmerBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">About Us</h1>
        <p className="primary-text">
          Our mission is to strengthen farmers market for the benefits of
          farmer, consumer and community. A farmer market is a public and
          recurring assembly of farmers or their representatives selling the
          food that the produced directly to the consumer.
        </p>
        <p className="primary-text">
          Farmer markets facilitate personal connections and bonds of mutual
          benefits between farmers, shoppers and community. By cutting out
          middleman , farmers receive more our food dollars in shoppers receive
          tough freshers and most favourable food in their area and local
          economic prosper.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
