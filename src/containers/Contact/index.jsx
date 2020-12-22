import React from 'react';
import labels from '../../assets/labels';

import ToggleLanguage from '../../components/toggle';

const Contact = () => (
  <div>
    <div className="background__footer position__footer">
      <div className="position__toggle">
        <ToggleLanguage />
      </div>
      <div className="component">
        <p>{labels.contactNumber}</p>
        <p>{labels.contactEmail}</p>
        <p>{labels.contactAdress}</p>
      </div>
    </div>
  </div>
);

export default Contact;