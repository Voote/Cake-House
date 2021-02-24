import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

const AboutMe = ({ languages }) => (
  <main>
    <div className="component__section background__home">
      <img
        src="./IMG/line_grey_long.png"
        alt="white long line"
        className="image__long"
      />
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <div className="position__bio">
        <div className="position__header">
          <h2>{languages.bioHeader}</h2>
        </div>
        <div className="label__home">
          <h4>{languages.bioAboutMe}</h4>
          <h4>{languages.bioAboutMe2}</h4>
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

const mapStateToProps = (state) => ({
  languages: state.languages.dictionary
});

export default connect(mapStateToProps)(AboutMe);
