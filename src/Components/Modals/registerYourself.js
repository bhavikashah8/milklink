import { Close } from '@mui/icons-material';
import React from 'react';

const RegisterFarmer = (props) => {
  return (
    <div className="modal">
      <button className="close-button" onClick={props.onClose}>
        <Close/>
      </button>
      <div className="register-page-wrapper">
        <h1 className="primary-heading">Are You a Farmer?</h1>
        <h1 className="primary-subheading">REGISTER YOURSELF</h1>
        <div className="register-form-container">
          <button className="secondary-button">
            Register 
          </button>
          <button className="secondary-button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterFarmer;
