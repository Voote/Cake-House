import React from 'react';
import { Button } from '@material-ui/core';
import labels from '../../assets/labels';

const TopNavbar = () => {
  const srollPage = (givenPosition) => {
    window.scrollTo(0, givenPosition);
  };

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
      </div>
    </div>
  );
};

export default TopNavbar;
