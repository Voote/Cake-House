import React from 'react';
import { connect } from 'react-redux';
import { Modal } from '@material-ui/core';

import { themeNames } from '../../constants';

const OfferModal = ({ open, handleClose, languages, themes }) => {
  const bacgkroundType =
    themes === themeNames.light
      ? 'position__modal background__modal'
      : 'position__modal background__modal--dark';
  const lineType =
    themes === themeNames.light
      ? './IMG/line_grey_long.png'
      : './IMG/line_pink_long.png';

  return (
    <Modal open={open} onClose={handleClose}>
      <main className={bacgkroundType}>
        <header className="position__header">
          <h1>{languages.offer}</h1>
        </header>
        <img
          src={lineType}
          alt="pink long line"
          className="image__line--flat"
        />
        <section className="position__modal--first-section">
          <div>
            <h3>{languages.offerHeaderCake}</h3>
            <p className="label__describtion-below">{languages.offer3Layers}</p>
          </div>
          <ul>
            <li>{languages.offerClassic1}</li>
            <li>{languages.offerClassic2}</li>
            <li>{languages.offerClassic3}</li>
          </ul>
        </section>
        <img
          src={lineType}
          alt="pink long line"
          className="image__line--flat"
        />
        <section>
          <div>
            <h3>{languages.offerHeaderSpecial}</h3>
            <p className="label__describtion-below">{languages.offer5Layers}</p>
          </div>
          <ul>
            <li>{languages.offerSpecial1}</li>
            <li>{languages.offerSpecial2}</li>
            <li>{languages.offerSpecial3}</li>
          </ul>
          <div>
            <h3>{languages.offerRequest}</h3>
            <p>
              <strong>{languages.contactMobileNumber}</strong>
            </p>
            <p>
              <strong>{languages.contactEmailAdress}</strong>
            </p>
          </div>
        </section>
      </main>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  languages: state.languages.dictionary,
  themes: state.themes.currentTheme
});

export default connect(mapStateToProps)(OfferModal);
