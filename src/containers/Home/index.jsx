import React from 'react';
import labels from '../../assets/labels';

const AboutMe = () => (
  <div className="component background__home">
    <img
      src="./IMG/line_grey_long.png"
      alt="white long line"
      className="image__long"
    />
    <div className="position__bio">
      <div className="position__header">
        <h2>{labels.bioHeader}</h2>
      </div>
      <div className="label__home">
        <h4>{labels.bioAboutMe}</h4>
        <h4>{labels.bioAboutMe2}</h4>
      </div>
    </div>
    <img
      src="./IMG/line_grey_short.png"
      alt="white long line"
      className="image__line"
    />
  </div>
);

export default AboutMe;
