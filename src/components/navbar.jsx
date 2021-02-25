import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';
import ToggleLanguage from './toggle';
import DarkThemeToggle from './darkToggle';
import OfferModal from './../containers/Offer/index';

const TopNavbar = ({ languages }) => {
  const [openModal, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const srollPage = (givenPosition) => window.scrollTo(0, givenPosition);
  const websitePosition = document.body;

  return (
    <div className="position__navbar">
      <OfferModal open={openModal} handleClose={handleCloseModal} />
      <div className="position__navbar--buttons background__navbar label__navbar">
        <div className="position__toggle">
          <ToggleLanguage />
        </div>
        <Button onClick={() => handleOpenModal()}>
          {languages.navbarOffer}
        </Button>
        <Button onClick={() => srollPage(websitePosition.offsetTop)}>
          {languages.navbarHome}
        </Button>
        <Button onClick={() => srollPage(websitePosition.scrollHeight)}>
          {languages.navbarContact}
        </Button>
        <div className="position__toggle--dark-mode">
          <DarkThemeToggle />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  languages: state.languages.dictionary
});

export default connect(mapStateToProps)(TopNavbar);
