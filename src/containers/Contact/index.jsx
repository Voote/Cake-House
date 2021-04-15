import React from 'react';
import { connect } from 'react-redux';
import { themeNames } from '../../constants';

const Contact = ({ languages, themes }) => {
  const backgroundImageTheme =
    themes === themeNames.light
      ? 'background__footer'
      : 'background__footer background__footer--dark';
  const longLineTheme =
    themes === themeNames.light
      ? './IMG/line_white_long.png'
      : './IMG/line_pink_long.png';
  const shortLineTheme =
    themes === themeNames.light
      ? './IMG/line_white_long.png'
      : './IMG/line_pink_short.png';

  return (
    <footer className={backgroundImageTheme}>
      <div className="position__footer component__section">
        <img
          src={longLineTheme}
          alt="white long line"
          className="image__long-line"
        />
        <div className="position__footer--contact label__contact">
          <header>
            <h2>{languages.contact}</h2>
          </header>
          <h3>
            {languages.contactNumber}
            <br />
            {languages.contactMobileNumber}
          </h3>
          <h3>
            {languages.contactEmail}
            <br />
            {languages.contactEmailAdress}
          </h3>
          <h3>
            {languages.contactAdress}
            <br />
            {languages.contactAdress2}
          </h3>
        </div>
        <img
          src={shortLineTheme}
          alt="white long line"
          className="image__line"
        />
      </div>
    </footer>
  );
};

const mapStateToProps = (state) => ({
  languages: state.languages.dictionary,
  themes: state.themes.currentTheme
});

export default connect(mapStateToProps)(Contact);
