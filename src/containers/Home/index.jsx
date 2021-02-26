import React from 'react';
import { connect } from 'react-redux';
import { themeNames } from '../../constants';

const AboutMe = ({ languages, themes }) => {
  const shortLineTheme =
    themes === themeNames.light
      ? './IMG/line_grey_long.png'
      : './IMG/line_pink_long.png';
  const longLineTheme =
    themes === themeNames.light
      ? './IMG/line_grey_short.png'
      : './IMG/line_pink_short.png';
  const backgroundImageTheme =
    themes === themeNames.light
      ? 'component__section background__home'
      : 'component__section background__home background__home--dark';
  const labelsTheme =
    themes === themeNames.light
      ? 'position__bio'
      : 'position__bio label__darkTheme';

  return (
    <main>
      <div className={backgroundImageTheme}>
        <img
          src={shortLineTheme}
          alt="white long line"
          className="image__long"
        />
        <div className={labelsTheme}>
          <div className="position__header">
            <h2>{languages.bioHeader}</h2>
          </div>
          <div className="label__home">
            <h4>{languages.bioAboutMe}</h4>
            <h4>{languages.bioAboutMe2}</h4>
          </div>
        </div>
        <img
          src={longLineTheme}
          alt="white long line"
          className="image__line"
        />
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  languages: state.languages.dictionary,
  themes: state.themes.currentTheme
});

export default connect(mapStateToProps)(AboutMe);
