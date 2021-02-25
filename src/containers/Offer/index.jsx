import React from 'react';
import { Modal } from '@material-ui/core';
import labelsENG from '../../assets/labelsENG';

const OfferModal = ({ open, handleClose }) => (
  <Modal open={open} onClose={handleClose}>
    <div className="position__modal background__modal">
      <header style={{ textAlign: 'center' }}>
        <h1>Oferta</h1>
      </header>
      <img
        src="./IMG/line_grey_short.png"
        alt="white long line"
        className="image__line--flat"
      />
      <section style={{ paddingBottom: '1rem' }}>
        <div style={{ textAlign: 'center' }}>
          <h3>Torty klasyczne</h3>
          <p style={{ marginBlockStart: '-1rem', marginInlineStart: '2vw' }}>
            (3 warstwy)
          </p>
        </div>
        <ul style={{ paddingLeft: '10rem' }}>
          <li>owocowe - £25</li>
          <li>czekoladowe - £30</li>
          <li>z alkoholem - £35</li>
        </ul>
      </section>

      <img
        src="./IMG/line_grey_short.png"
        alt="white long line"
        className="image__line--flat"
      />

      <section>
        <div style={{ textAlign: 'center' }}>
          <h3>Specjalne okazje</h3>
          <p style={{ marginBlockStart: '-1rem', marginInlineStart: '2vw' }}>
            (5 warstw)
          </p>
        </div>
        <ul style={{ paddingLeft: '10rem' }}>
          <li>owocowe - £30</li>
          <li>czekoladowe - £35</li>
          <li>dla doroslych - 40</li>
        </ul>
        <div style={{ textAlign: 'center' }}>
          <h3>Dekoracja do uzgodnienia</h3>
          <p>
            <strong>{labelsENG.contactMobileNumber}</strong>
          </p>
          <p>
            <strong>{labelsENG.contactEmailAdress}</strong>
          </p>
        </div>
      </section>
    </div>
  </Modal>
);

export default OfferModal;
