import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import ToggleLanguage from './toggle';
import DarkThemeToggle from './darkToggle';
import { themeNames } from '../constants';
import OfferModal from '../containers/Offer';

const TopNavbar = ({ languages, themes }) => {
  const [openModal, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    srollPage(websitePosition.offsetTop);
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);
  const srollPage = (givenPosition) => window.scrollTo(0, givenPosition);
  const websitePosition = document.body;
  const backgroundTheme =
    themes === themeNames.light
      ? 'background__navbar'
      : 'background__navbar background__navbar--dark';

  return (
    <nav className="position__navbar">
      <OfferModal open={openModal} handleClose={handleCloseModal} />
      <div className={backgroundTheme}>
        <div className="position__navbar--buttons label__navbar">
          <div className="position__toggle">
            <ToggleLanguage />
          </div>
          <Button onClick={() => handleOpenModal()}>{languages.offer}</Button>
          <Button onClick={() => srollPage(websitePosition.offsetTop)}>
            {languages.navbarHome}
          </Button>
          <Button onClick={() => srollPage(websitePosition.scrollHeight)}>
            {languages.contact}
          </Button>
          <div className="position__toggle--theme">
            <DarkThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  languages: state.languages.dictionary,
  themes: state.themes.currentTheme
});

export default connect(mapStateToProps)(TopNavbar);
