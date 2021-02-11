import React from 'react';
import labelsENG from '../../assets/labelsENG';
import labelsPL from '../../assets/labelsPL';

const Contact = ({ language }) => {
  const label = language === labelsENG.eng ? labelsENG : labelsPL;
  return (
    <footer>
      <div className="background__footer position__footer component__section">
        <img
          src="./IMG/line_white_long.png"
          alt="white long line"
          className="image__long-line"
        />
        <div className="position__footer--contact label__contact">
          <h2>{label.contactHeader}</h2>
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
        <img
          src="./IMG/line_white_long.png"
          alt="white long line"
          className="image__line"
        />
      </div>
    </footer>
  );
};

export default Contact;
