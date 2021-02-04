import React from 'react';
import { Button } from '@material-ui/core';
import labels from '../../assets/labels';
import etykiety from '../../assets/etykiety';

import ToggleLanguage from '../../components/toggle';

const TopNavbar = ({ languageSelector, language }) => {
  const label = language === 'ENG' ? labels : etykiety;
  const srollPage = (givenPosition) => {
    window.scrollTo(0, givenPosition);
  };
  const selectLanguage = (languageCode) => languageSelector(languageCode);
  const websitePosition = document.body;

  return (
    <div className="position__navbar">
      <div className="position__navbar--buttons background__navbar">
        <Button>{label.navbarOffer}</Button>
        <Button onClick={() => srollPage(websitePosition.offsetTop)}>
          {label.navbarHome}
        </Button>
        <Button onClick={() => srollPage(websitePosition.scrollHeight)}>
          {label.navbarContact}
        </Button>
        <div className="position__toggle">
          <ToggleLanguage selectLanguage={selectLanguage} language={language} />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
