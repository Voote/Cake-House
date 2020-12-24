import React from 'react';
import labels from '../../assets/labels';

import ToggleLanguage from '../../components/toggle';

const AboutMe = () => (
  <div className="component">
    <div className="position__bio">
      <div className="position__header">
        <h3>{labels.bioHeader}</h3>
      </div>
      <div>
        <p>{labels.bioAboutMe} </p>
      </div>
      <div>
        <img
          src="./IMG/happy_family_cooking.jpg"
          alt="happy family cooking"
          className="image__bio"
        />
      </div>
      <div className="position__toggle">
        <ToggleLanguage />
      </div>
    </div>
  </div>
);

export default AboutMe;
