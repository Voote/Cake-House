import React from 'react';
import { connect } from 'react-redux';
import { themeNames } from '../../constants';
import '../../assets/styles.scss';

const Signature = ({ languages, themes }) => {
  const signatureBackgroundTheme =
    themes === themeNames.light
      ? 'background__signature'
      : 'background__signature--dark';
  const authorTheme =
    themes === themeNames.light
      ? 'position__footer--signature position__author'
      : 'position__footer--signature position__author position__author--dark';

  return (
    <div className={signatureBackgroundTheme}>
      <div className="position__footer--links">
        <div className="position__signature position__footer--signature background__signature--icons">
          <h4>{languages.footerMore}</h4>
          <a href="/" className="position__icon">
            <i className="fab fa-facebook fa-lg" />
          </a>
          <a href="/" className="position__icon">
            <i className="fab fa-instagram fa-lg" />
          </a>
          <a href="/" className="position__icon">
            <i className="fab fa-pinterest fa-lg" />
          </a>
        </div>
        <div className="position__footer--survey">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdJsXRmN05GTe-nevCWoBR9tEsIh2zhAJXWSm-nz4WyjOlFcw/viewform?usp=sf_link"
          >
            {languages.survey}
          </a>
        </div>
      </div>
      <div className={authorTheme}>
        <span>{languages.author}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  languages: state.languages.dictionary,
  themes: state.themes.currentTheme
});

export default connect(mapStateToProps)(Signature);
