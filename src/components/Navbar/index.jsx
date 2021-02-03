import React from 'react';
import { Button } from '@material-ui/core';
import labels from '../../assets/labels';

import ToggleLanguage from '../../components/toggle';

const TopNavbar = ({ languageSelector, language }) => {
  const srollPage = (givenPosition) => {
    window.scrollTo(0, givenPosition);
  };
  const selectLanguage = (languageCode) => languageSelector(languageCode);

  const position = document.body;

  return (
    <div className="position__navbar">
      <div className="position__navbar--buttons background__navbar">
        <Button>{labels.navbarOffer}</Button>
        <Button onClick={() => srollPage(position.offsetTop)}>
          {labels.navbarHome}
        </Button>
        <Button onClick={() => srollPage(position.scrollHeight)}>
          {labels.navbarContact}
        </Button>
        <div className="position__toggle">
          <ToggleLanguage selectLanguage={selectLanguage} language={language} />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
