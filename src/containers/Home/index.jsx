import React from 'react';
import labels from '../../assets/labels';

const AboutMe = () => (
  <div
    className="component"
    style={{
      background: "url('./IMG/cooking_background.jpg') contain",
      height: '70vh'
    }} //W style.scss wywala apke, tutaj nie potrafie wyswietlic tego .jpg jako background-image !!HELP!!
  >
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
