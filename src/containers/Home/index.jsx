import React from 'react';
import labels from '../../assets/labels';

const AboutMe = () => (
  <div className="component background__home">
    <div className="position__bio">
      <div className="position__header">
        <h3>{labels.bioHeader}</h3>
      </div>
      <div>
        <p>{labels.bioAboutMe} </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
