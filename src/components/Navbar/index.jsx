import React from 'react';
import { Button } from '@material-ui/core';
import labelsENG from '../../assets/labelsENG';
import labelsPL from '../../assets/labelsPL';

import ToggleLanguage from '../../components/toggle';
import DarkThemeToggle from '../darkToggle';

const TopNavbar = ({ languageSelector, language }) => {
  const label = language === labelsENG.eng ? labelsENG : labelsPL;
  const srollPage = (givenPosition) => {
    window.scrollTo(0, givenPosition);
  };
  const selectLanguage = (languageCode) => languageSelector(languageCode);
  const websitePosition = document.body;

  return (
    <div className="position__navbar">
      <div className="position__navbar--buttons background__navbar label__navbar">
        <div className="position__toggle">
          <ToggleLanguage selectLanguage={selectLanguage} language={language} />
        </div>
        <Button>{label.navbarOffer}</Button>
        <Button onClick={() => srollPage(websitePosition.offsetTop)}>
          {label.navbarHome}
        </Button>
        <Button onClick={() => srollPage(websitePosition.scrollHeight)}>
          {label.navbarContact}
        </Button>
        <div className="position__toggle--dark-mode">
          <DarkThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
