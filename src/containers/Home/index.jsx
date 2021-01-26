import React from 'react';
import labels from '../../assets/labels';
import etykiety from '../../assets/etykiety';

const AboutMe = ({ language }) => {
  const label = language === 'ENG' ? labels : etykiety;
  return (
    <main>
      <div className="component background__home">
        <img
          src="./IMG/line_grey_long.png"
          alt="white long line"
          className="image__long"
        />
        <div className="position__bio">
          <div className="position__header">
            <h2>{label.bioHeader}</h2>
          </div>
          <div className="label__home">
            <h4>{label.bioAboutMe}</h4>
            <h4>{label.bioAboutMe2}</h4>
          </div>
        </div>
        <img
          src="./IMG/line_grey_short.png"
          alt="white long line"
          className="image__line"
        />
      </div>
    </main>
  );
};

export default AboutMe;
