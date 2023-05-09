import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const RegisterFarmer = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Are You a Farmer?</h1>
      <h1 className="primary-heading">Register Yourself</h1>
      <div className="contact-form-container">
        <button className="secondary-button">
          Order Now <FiArrowRight />{' '}
        </button>
      </div>
    </div>
  );
};

export default RegisterFarmer;
