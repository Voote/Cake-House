import React from 'react';
import { connect } from 'react-redux';
import { Modal } from '@material-ui/core';

import LightOffer from './light-offer';
import { themeNames } from '../../constants';
import DarkOffer from './dark-offer';

const OfferModal = ({ open, handleClose, languages, themes }) => {
  const themePicker =
    themes === themeNames.light ? (
      <LightOffer labels={languages} />
    ) : (
      <DarkOffer labels={languages} />
    );

  return (
    <Modal open={open} onClose={handleClose}>
      {themePicker}
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  languages: state.languages.dictionary,
  themes: state.themes.currentTheme
});

export default connect(mapStateToProps)(OfferModal);
