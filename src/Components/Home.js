import React from 'react';
import BannerBackground from '../Assets/home-banner-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';

import Navbar from './Navbar';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Buy Products</h1>
          <p className="primary-text">
            No middleman here! Our farm-fresh milk is delivered straight to your
            door for the freshest taste possible!
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={AboutBackgroundImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
