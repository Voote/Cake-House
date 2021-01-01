import React from 'react';
import labels from '../../assets/labels';
import PrivacyPolicy from './privacy-policy';

const Contact = () => (
  <div>
    <div className="background__footer position__footer">
      <img
        src="./PLACEHOLDER/bookblue.png"
        alt="blue book icon"
        className="image__logo"
      />
      <div className="position__footer--contact">
        <h3>
          {labels.contactNumber}
          <br />
          {labels.contactEnglishNumber}
        </h3>
        <h3>{labels.contactEmail}</h3>
        <h3>{labels.contactAdress}</h3>
      </div>
      <div className="background__signature">
        <PrivacyPolicy />
      </div>
    </div>
  </div>
);

export default Contact;
