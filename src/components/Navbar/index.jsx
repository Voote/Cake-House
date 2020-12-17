import React from 'react';
import { Button } from '@material-ui/core';

const TopNavbar = () => {
  const skrolowanko = (pozycja) => {
    console.log('Pzycja osi Y:', pozycja);
    window.scrollTo(0, pozycja);
  };

  const position = document.body.getBoundingClientRect();

  return (
    <div className="position__navbar">
      <Button>offer</Button>
      <Button onClick={() => skrolowanko(position.top)}>home</Button>
      <Button onClick={() => skrolowanko(position.bottom)}>contact</Button>
    </div>
  );
};

export default TopNavbar;
