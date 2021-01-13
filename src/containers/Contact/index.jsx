import React from 'react';
import labels from '../../assets/labels';
import etykiety from '../../assets/etykiety';
import PrivacyPolicy from './privacy-policy';

const Contact = ({ PL }) => {
  const label = PL ? labels : etykiety;
  return (
    <div>
      <div className="background__footer position__footer">
        <img
          src="./IMG/placeholder_book.png"
          alt="blue book icon"
          className="image__logo"
        />
        <div className="position__footer--contact">
          <h3>
            {label.contactNumber}
            <br />
            {label.contactMobileNumber}
          </h3>
          <h3>
            {label.contactEmail}
            <br />
            {label.contactEmailAdress}
          </h3>
          <h3>
            {label.contactAdress}
            <br />
            {label.contactAdress2}
          </h3>
        </div>
        <div className="background__signature">
          <PrivacyPolicy />
        </div>
      </div>
    </div>
  );
};

export default Contact;
