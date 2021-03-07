import React from 'react';

const LightOffer = ({ labels }) => (
  <main className="position__modal background__modal">
    <header className="label__header">
      <h1>{labels.offer}</h1>
    </header>
    <img
      src="./IMG/line_grey_short.png"
      alt="white long line"
      className="image__line--flat"
    />
    <section className="position__modal--first-section">
      <div>
        <h3>{labels.offerHeaderCake}</h3>
        <p className="label__describtion-below">{labels.offer3Layers}</p>
      </div>
      <ul>
        <li>{labels.offerClassic1}</li>
        <li>{labels.offerClassic2}</li>
        <li>{labels.offerClassic3}</li>
      </ul>
    </section>

    <img
      src="./IMG/line_grey_short.png"
      alt="white long line"
      className="image__line--flat"
    />

    <section>
      <div>
        <h3>{labels.offerHeaderSpecial}</h3>
        <p className="label__describtion-below">{labels.offer5Layers}</p>
      </div>
      <ul>
        <li>{labels.offerSpecial1}</li>
        <li>{labels.offerSpecial2}</li>
        <li>{labels.offerSpecial3}</li>
      </ul>
      <div>
        <h3>{labels.offerRequest}</h3>
        <p>
          <strong>{labels.contactMobileNumber}</strong>
        </p>
        <p>
          <strong>{labels.contactEmailAdress}</strong>
        </p>
      </div>
    </section>
  </main>
);

export default LightOffer;
